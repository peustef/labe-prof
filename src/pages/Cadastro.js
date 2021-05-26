import React from "react";
import Footer from "../components/Footer/Footer";
import FormCadastro from "../components/Form-cadastro/FormCadastro";
import Header from "../components/Header/Header";

export default class Cadastro extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormCadastro />
        <Footer />
      </div>
    );
  }
}
