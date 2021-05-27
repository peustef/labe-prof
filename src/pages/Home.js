import React from 'react'
import CardPost from '../components/CardPost/CardPost'
import axios from "axios";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Filtro from '../components/Filtro/Filtro'

export default class Home extends React.Component {
	state = {
		servicos: []
	};

	componentDidMount() {
		this.getAllJobs();
	}

	getAllJobs = async () => {
		const URL = "https://labeninjas.herokuapp.com/jobs";
		const headers = {
			headers: { Authorization: "6b5d3ade-aeb6-4364-91fa-b9a319e476c5" }
		};
		try {
			const res = await axios.get(`${URL}`, headers);
			this.setState({ servicos: res.data.jobs });
			console.log(this.state.servicos);
		} catch (error) {
			alert(error);
		}
	};

	render() {
		return (
			<div>
				<Header />
				<Filtro
					getAllJobs={this.getAllJobs}
					servicos={this.state.servicos}
				/>
				<CardPost 
					getAllJobs={this.getAllJobs}
					servicos={this.state.servicos}
				/>
				<Footer />
			</div>
		)


	}

}

