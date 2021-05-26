import React from "react";
import FormCadastro from "../components/Form-cadastro/FormCadastro";
import Header from "../components/Header/Header";

export default class Cadastro extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormCadastro />
      </div>
    );
  }
}
