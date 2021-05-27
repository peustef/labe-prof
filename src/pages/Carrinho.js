import React from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import { FaCreditCard } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

export default class Carrinho extends React.Component {
  state = {
    jobsCarrinho: []
  };
  componentDidMount() {
    this.getAllJobs();
  }
  getAllJobs = async () => {
    const URL = "https://labeninjas.herokuapp.com/jobs";
    const headers = {
      headers: { Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5" }
    };
    try {
      const res = await axios.get(`${URL}`, headers);
      this.setState({ jobsCarrinho: res.data.jobs });
      console.log(this.state.jobsCarrinho);
    } catch (error) {
      alert(error);
    }
  };

  removerJob = (jobId) => {
    const URL = "https://labeninjas.herokuapp.com/jobs";
    const body = {
      taken: false
    };
    const headers = {
      headers: { Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5" }
    };
    axios
      .post(`${URL}/${jobId}`, body, headers)
      .then((res) => {
        alert("Aula removida do carrinho");
        this.getAllJobs();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  render() {
    const servicosCarrinho = this.state.jobsCarrinho.filter((jobCart) => {
      if (jobCart.taken === true) {
        return true;
      }
    });
    console.log(servicosCarrinho);

    const servicos = servicosCarrinho.map((servico) => {
      return (
        <div key={servico.id} className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Produto</th>

                    <th className="hidden text-right md:table-cell">
                      Preço unitário
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">

                      <img
                        src="https://blog.academia.com.br/wp-content/uploads/2019/02/273098-entenda-qual-e-o-papel-do-professor-na-educacao-dos-alunos.jpg"
                        className="w-20 rounded"
                        alt="Thumbnail"
                      />

                    </td>
                    <td>

                      <p className="mb-2 md:ml-4">{servico.title}</p>

                      <button onClick={() => this.removerJob(servico.id)} type="submit" className="text-gray-700 md:ml-4">
                        <small>(Remover item)</small>
                      </button>


                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        R$ {servico.price},00
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="flex bg-blue-800 rounded-md text-base p-4 font-medium	text-white hover:bg-red-600 uppercase ml-auto">
                Remover todos os itens
              </button>


              <hr className="pb-6 mt-6" />
              <div className="flex justify-center my-4 mt-6 -mx-2 lg:flex">
                <div className="lg:px-2 lg:w-1/2 ">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase text-center">
                      Detalhes da compra
                    </h1>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Subtotal
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        R$ 582.151,5
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        R$ 150,00
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        R$ 582.000,00
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        R$ 1,50
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        R$ 582.304,5
                      </div>
                    </div>
                    <a href="#">
                      <button className="flex justify-center items-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-blue-800 rounded-full shadow item-center hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                        <FaCreditCard className="text-blue-500 w-8 h-8" />
                        <span className="ml-2 mt-5px text-base">
                          Finalizar compra
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div>{servicos}</div>
        <Footer />
      </div>
    );
  }
}
