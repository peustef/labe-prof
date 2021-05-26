import React from "react";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import FormCadastro from "../components/Form-cadastro/FormCadastro";
import Header from "../components/Header/Header";

const ContainerPrincipal = styled.div ` 
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 2%;
  padding: 5% 5%;

`
const ImgLateral = styled.img`
  max-height: 300px;
  max-width: 500px;
`

export default class Cadastro extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ContainerPrincipal>
            <FormCadastro />
            <ImgLateral src="https://picsum.photos/seed/picsum/200/300"/>
        </ContainerPrincipal>
        <Footer />
      </div>
    );
  }
}
