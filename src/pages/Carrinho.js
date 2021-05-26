import React from "react";
import Header from "../components/Header/Header";
import { FaCreditCard } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

export default class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table className="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">Produto</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantidade</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Preço unitário
                    </th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                          className="w-20 rounded"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 md:ml-4">Earphone</p>
                        <form action="" method="POST">
                          <button type="submit" class="text-gray-700 md:ml-4">
                            <small>(Remover item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            value="2"
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        R$ 150,00
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        R$ 300,00
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png"
                          className="w-20 rounded"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>
                    <td>
                      <p className="mb-2 md:ml-4">Tesla Model 3</p>
                      <form action="" method="POST">
                        <button type="submit" class="text-gray-700 md:ml-4">
                          <small>(Remover item)</small>
                        </button>
                      </form>
                    </td>
                    <td className="justify-center md:justify-end md:flex md:mt-4">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            value="1"
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        R$ 582.000,00
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        R$ 582.000,00
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg"
                          className="w-20 rounded"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>
                    <td>
                      <p class="mb-2 md:ml-4">Bic 4 colour pen</p>
                      <form action="" method="POST">
                        <button type="submit" class="text-gray-700 md:ml-4">
                          <small>(Remover item)</small>
                        </button>
                      </form>
                    </td>
                    <td className="justify-center md:justify-end md:flex md:mt-8">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            value="3"
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        R$ 1,50
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        R$ 4,50
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
        <Footer />
      </div>
    );
  }
}
