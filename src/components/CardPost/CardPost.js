import React from "react";
import { HiShoppingCart } from "react-icons/hi";


export default class CardPost extends React.Component {
    state = {
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-30"
    }
    render() {
        return (

            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 ml-8 bg-gray-200 ">
                <div className="px-4 py-2">
                    <h1 className="text-blue-700 font-bold text-2xl uppercase  ">{this.state.title}</h1>
                    <p className="text-blue-700 text-sm mt-1">{this.state.description}</p>
                </div>
                <img className="h-56 w-full object-cover mt-2" src="https://blog.academia.com.br/wp-content/uploads/2019/02/273098-entenda-qual-e-o-papel-do-professor-na-educacao-dos-alunos.jpg" alt="PROFESSORA" />
                <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
                    <p className="text-blue-700 text-xl">{this.state.dueDate}</p>
                    <p className="text-blue-700 text-xl">{this.state.paymentMethods}</p>
                </div>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
                    <h1 className="text-blue-700 font-bold text-xl">R${this.state.price},00</h1>

                    <button class="px-6 py-2 bg-blue-600 text-white text-lg  font-semibold rounded-full hover:bg-blue-800 inline-flex items-center ">                        
                    <HiShoppingCart />Adicionar

                    </button>
                </div>
            </div >


        )
    }
}
