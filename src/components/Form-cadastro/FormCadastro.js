import React from 'react'
import styled from 'styled-components'


const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
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

    }



  render() {
    return (
      <div>
          <h2>Cadastro</h2>
          <ContainerForm > 

            <FormLine >
                <h3>Nome - tema da aula</h3>
                 <input 
                 type="text" 
                 placeholder="Nome/tema da aula" 
                 class="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                 onChange={this.handleTema}
                 />
            </FormLine>
         
            <FormLine >
                <h3>Valor da aula</h3>
                 <input 
                 type="text" 
                 placeholder="Valor" 
                 class="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                 onChange={this.handleValor}
                 />
            </FormLine>

            <FormLine >
                <h3>Descrição</h3>
                 <input 
                 type="text" 
                 placeholder="Descrição" 
                 class="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                 onChange={this.handleInfo}
                 />
            </FormLine>

            <FormLine >
                <h3>Prazo para uso</h3>
                 <input 
                 type="date" 
                 class="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                 onChange={this.handleData}
                 />
            </FormLine>

            <FormLine >
                <h3>Formas de pagamento </h3>
                 <select onChange={this.handlePgt}>
                    <option value="dinheiro"> Dinheiro</option>
                    <option value="cartão"> Cartão</option>
                    <option value="Boleto"> Boleto</option>
                 </select>
            </FormLine>
                            

          </ContainerForm>

          <button>Cadastrar</button>

            
       

      </div>
    )
  }
}