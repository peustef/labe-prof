import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"> Home</Link>
        <Link to="/cadastro"> Cadastro </Link>
        <Link to="/carrinho"> Carrinho </Link>

      </div>
    )
  }
}
