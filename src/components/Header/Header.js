import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "../../tailwind.output.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-3 bg-blue-700 h-20 items-center">
        <div className="flex justify-center col-start-2">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div className="flex justify-center col-start-3">
          <Link to="/cadastro">
            <button>Cadastro</button>
          </Link>
          <Link to="/carrinho/:produtosCarrinho">
            <button>
              <HiShoppingCart />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
