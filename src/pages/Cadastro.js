import React from "react";
import styled from "styled-components";
import FormCadastro from "../components/Form-cadastro/FormCadastro";
import Header from "../components/Header/Header";
import Prof from "../img/prof.jpg"

const ContainerPrincipal = styled.div ` 
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 2%;
  padding: 5% 5%;
`

const ContainerImg = styled.div`
  max-width: 40%;
  max-height: 40%;
` 

const ImgLateral = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export default class Cadastro extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <ContainerPrincipal>

            <FormCadastro />

            <ContainerImg >
              <ImgLateral src={Prof} alt="imagem professor"/>
            </ContainerImg>
            
        </ContainerPrincipal>
      </div>
    );
  }
}
