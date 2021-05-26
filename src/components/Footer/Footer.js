import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import styled from 'styled-components'
import "../../tailwind.output.css";

const ContainerFooter = styled.div`
    background-color: #f2f2f2;
    padding: 10px 0;
`

const ContainerSecoes = styled.div`
    display: flex;
    flex-direction: row;
`

const Secao = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 22px 50px;

    h3{
        font-weight: 600;
        margin-bottom: 12px;
        margin-left: 4px;
    }

    a {
        font-size: 14px;
        padding: 5px;
        color: #535353;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    }
`
const Icones = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    a{
        padding: 0;
        margin-right: 3px;
        color: black;
    }
`


export default function Footer() {
    return (
        <ContainerFooter>
            <ContainerSecoes>
                <Secao>
                    <h3>Empresa</h3>
                    <a href='#'>Sobre nós</a>
                    <a href='#'>Contato</a>
                </Secao>
                <Secao>
                    <h3>Encontre-nos</h3>
                    <div>
                        <ImLocation />
                        <a href='#'>Rua Virtual, nº 27 - SP</a>
                    </div>
                    <div>
                        <IoCall />
                        <a href='#'>(21) 55555-9999</a>
                    </div>

                </Secao>
                <Secao>
                    <h3>Siga-nos</h3>
                    <Icones>
                        <a href='https://www.facebook.com/' target='_blank'><FaFacebookSquare  className="w-6 h-6"/></a>
                        <a href='https://twitter.com/' target='_blank'><FaTwitterSquare className="w-6 h-6"/></a>
                        <a href='https://www.instagram.com/' target='_blank'><FaInstagramSquare className="w-6 h-6"/></a>
                    </Icones>

                </Secao>
            </ContainerSecoes>
        </ContainerFooter>
        
    )
}