import React,{Component} from "react";
import ProductosDatos from "./ProductosDatos"

class Productos extends Component{

    constructor(){
        super()

        this.state={
            listaProductos: [
                {
                    nombre: "Notebook Atma",
                    precio: "$63.699",
                    descripcion: "Procesador AMD Ryzen 5 5600G",
                    sku: 412351123415512,
                    cantDisponible: 4,
                    imagen: "../Images/Cafetera.jpg"
                },
                 {
                    nombre: "Notebook Samsung",
                    precio: "$85.990",
                    descripcion: "Procesador i3 4gb memoria RAM",
                    sku: 412351123415512,
                    cantDisponible: 4,
                    imagen: "../Images/Cafetera2.jpg"
                },
                {
                    nombre: "Solarmax Amd 5",
                    precio: "$125.990",
                    descripcion: "Procesador AMD Ryzen 3 560G",
                    sku: 412351123415512,
                    cantDisponible: 4,
                    imagen: "../Images/Cafetera3.jpg"
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