import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart } from "react-icons/hi";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/cadastro"><button>Cadastro</button></Link>
        <Link to="/carrinho"><button><HiShoppingCart/></button></Link>

      </div>
    )
  }
}
