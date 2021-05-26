import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import "../../tailwind.output.css";


const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 50%;
    height: 100%;
`

const FormLine = styled.div`
    display: flex; 
    justify-content: space-between ;
`

export default class FormCadastro extends React.Component {
    state = {
        inputTema: "",
        inputValor: "",
        inputInfo: "",
        inputData: "",
        inputPgt: "",
        // listaPgt:[]

    }

    handleTema = (e) => {
      this.setState({inputTema: e.target.value})
    }
    handleValor = (e) => {
      this.setState({inputValor: Number(e.target.value)})
    }
    handleInfo = (e) => {
      this.setState({inputInfo: e.target.value})
    }

    handleData = (e) => {
      this.setState({inputData: e.target.value})
    }
    
    handlePgt = (e) => {
      this.setState({inputPgt: e.target.value})
      
    }

    // handleListaPgt = () => {
    //   const pgtAdd = this.state.inputPgt 
    //   this.setState({listaPgt: [...this.state.listaPgt], pgtAdd })
    // }
    // handlePgtDin = (e) => {
    //   const pgtAdd = this.state.inputPgt.push(e.target.value)
    //   this.setState({inputPgt: pgtAdd })
    // }

    cadastraAula = () => {
        const URL = "https://labeninjas.herokuapp.com/jobs"
        const headers = {headers: {Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5"}} 
        const body = {
          "title": this.state.inputTema,
          "description": this.state.inputInfo,
          "price":(this.state.inputValor),
          "paymentMethods": [this.state.inputPgt],
          "dueDate": this.state.inputData,
        }

      if (this.state.inputTema === "" || this.state.inputValor === "" || this.state.inputInfo === "" || this.state.inputData === "" || this.state.inputPgt === ""  ) {
        alert("Por favor preencha todos os campos")
      } else {
       axios.post(`${URL}`, body, headers)
       .then((res) => {
          alert(res.data.message)
       })
       .catch((err) => {
          alert(err.message)
       })

        this.setState({
          inputTema: "",
          inputValor: "",
          inputInfo: "",
          inputData: "",
          inputPgt: "",
        })
      }      
    }

    // componentDidUpdate() {
    //   console.log(this.state.inputPgt)
    // }

    
  render() {
    return (          
    <ContainerForm > 
      
      <h2>Cadastro</h2>

      <FormLine >
          <h3>Nome - tema da aula</h3>
          <input 
          type="text" 
          placeholder="Nome/tema da aula" 
          className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
          onChange={this.handleTema}
          />
      </FormLine>
  
      <FormLine >
          <h3>Valor da aula</h3>
          <input 
          type="number" 
          placeholder="Valor" 
          className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
          onChange={this.handleValor}
          />
      </FormLine>

      <FormLine >
          <h3>Prazo para uso</h3>
          <input 
          type="date" 
          className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
          onChange={this.handleData}
          />
      </FormLine>

      <FormLine >
          <h3>Formas de pagamento </h3>

            {/* <div>

              <div>
                <label>Dinheiro</label>
                <input type="checkbox" value="dinheiro" onChange={this.handlePgtDin}/> 
              </div>
              
              <div>
                <label>Cartão</label>
                <input type="checkbox" value="cartao"/> 
              </div>

              <div>
                <label>Boleto</label>
                <input type="checkbox" value="boleto"/> 
              </div>

              <div>
                <label>Pix</label>
                <input type="checkbox" value="pix"/> 
              </div>

            </div> */}

          <select onChange={this.handlePgt} className="bg-gray-300 max-w-full focus:outline-none text-gray-700">
              <option value=""> Escolher</option>
              <option value="dinheiro"> Dinheiro</option>
              <option value="cartão"> Cartão</option>
              <option value="boleto"> Boleto</option>
              <option value="pix"> Pix</option>
          </select>
      </FormLine>

      <FormLine >
          <h3>Descrição</h3>
          <input 
          type="text" 
          placeholder="Descrição" 
          size="40"
          maxLength="200"
          className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
          onChange={this.handleInfo}
          />
      </FormLine>
                      
      <button 
      onClick={this.cadastraAula}
      className="bg-blue-500 px-5 py-2 text-lg font-semibold tracking-wider text-white rounded-full hover:bg-blue-600"
      >Cadastrar</button>
    </ContainerForm>    
    )
  }
}