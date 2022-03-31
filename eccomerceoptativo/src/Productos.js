import React,{Component} from "react";
import ProductosDatos from "./ProductosDatos"

class Productos extends Component{

    constructor(){
        super()

        this.state={
            listaProductos: [
                {
                    nombre: "Cafetera Atma Desayuno CA8143",
                    precio: "3.699",
                    descripcion: "Procesador AMD Ryzen 5 5600G",
                    sku: 412351123415512,
                    cantDisponible: 4,
                    imagen: "../Images/Cafetera.jpg"
                },
                 {
                    nombre: "Solarmax Amd Ryzen 5",
                    precio: "85.990",
                    descripcion: "Procesador AMD Ryzen 5 5600G",
                    sku: 412351123415512,
                    cantDisponible: 4
                },
                {
                    nombre: "Solarmax Amd Ryzen 5",
                    precio: "85.990",
                    descripcion: "Procesador AMD Ryzen 5 5600G",
                    sku: 412351123415512,
                    cantDisponible: 4
                }
            ]
        }
    }


    
    render(){
        

        return(
            <div className= "productoCaja">
                {this.state.listaProductos.map(lista=><ProductosDatos nombre = {lista.nombre} precio = {lista.precio} descripcion = {lista.descripcion} sku ={lista.sku} cantDisponible={lista.cantDisponible} imagen= {lista.imagen}/>)}
                
            
            </div>
        )
    }
}

export default Productos;