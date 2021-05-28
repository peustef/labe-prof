import React from 'react'
import Footer from '../components/Footer/Footer'
import FormContato from '../components/FormContato/FormContato'
import Header from '../components/Header/Header'
import "../tailwind.output.css"
import imgContato from "../img/Contato.jpg"
import styled from 'styled-components'
import GlobalStyle from '../style/global';

const ContainerContato = styled.div`
width: 100vw;
height: 100%;
display: flex;
justify-content: space-around;
padding: 2%;
`

const Imglateral = styled.img`
max-width: 500px;
`

export default class Contato extends React.Component {
    render(){
        return (
            <div>
                <Header />

				<ContainerContato>
                    <Imglateral src={imgContato} alt="imagem contato"/>
                    <FormContato />
                </ContainerContato>

                <Footer />
                <GlobalStyle />
            </div>
        )
    }
}