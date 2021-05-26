import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Filtro from '../components/Filtro/Filtro'

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Filtro />
				<Footer />
			</div>
				
			)
	}

}

