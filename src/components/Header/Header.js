import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "../../tailwind.output.css";
import logo from "../../img/logo.png"


export default class Header extends React.Component {
  render() {
    return (
      <div>

        <div className="w-full">
          <nav className="bg-white shadow-md">
            <div className="md:flex items-center justify-between py-2 px-8 ">
              <div className="flex justify-between items-center">
                <div className=" w-64 font-bold text-gray-800 ">
                  <Link to="/">
                    <button><img src={logo} /></button>
                  </Link>
                </div>
              </div>

              <div class="flex flex-col md:flex-row  ">
                <Link to="/cadastro" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  <button>Cadastro</button>
                </Link>
                <Link to="/carrinho/:produtosCarrinho" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
                  <button>
                    <HiShoppingCart />
                  </button>
                </Link>
              </div>

            </div>
          </nav>
        </div>


      </div>

    );
  }
}
