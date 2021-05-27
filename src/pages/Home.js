import React from 'react'
import CardPost from '../components/CardPost/CardPost'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Filtro from '../components/Filtro/Filtro'
import Design from '../components/Design/Design'


export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Design />
				<Filtro />
				<CardPost />				
				<Footer />
			</div>
		)
				
			
	}

}

