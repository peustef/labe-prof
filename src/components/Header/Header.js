import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "../../tailwind.output.css";
import logo from "../../img/logo.png"


export default class Header extends React.Component {
  render() {
    return (
      <div className="w-full grid grid-cols-3 bg-white shadow-md items-center justify-center md:flex-row">

        <div className="col-start-2">
          <div className=" md:flex items-center py-2 px-8 ">
            <div className=" flex items-center">
              <div className=" w-64 font-bold text-gray-800 ">
                <Link to="/">
                  <a><img src={logo} /></a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-start-3 flex justify-center items-center md:flex-row">
          <Link to="/cadastro" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
            <button>Dar aulas</button>
          </Link>
          <Link to="/carrinho/:produtosCarrinho" className="text-gray-800 rounded hover:bg-blue-800 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
            <button>
              <HiShoppingCart />
            </button>
          </Link>
        </div>


      </div>

    );
  }
}
