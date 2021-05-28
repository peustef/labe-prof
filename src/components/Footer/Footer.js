import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import "../../tailwind.output.css";
import {ContainerFooter, ContainerSecoes, Secao, Icones} from './Style'




export default function Footer() {
    return (
        <ContainerFooter>
            <ContainerSecoes>
                <Secao>
                    <h3>Empresa</h3>
                    <a href='/SobreNos'>Sobre nós</a>
                    <a href='/Contato'>Contato</a>
                </Secao>
                <Secao>
                    <h3>Encontre-nos</h3>
                    <div>
                        <ImLocation />
                        <a href='#'>Rua Virtual, nº 27 - SP</a>
                    </div>
                    <div>
                        <IoCall />
                        <a href='#'>(11) 55555-9999</a>
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