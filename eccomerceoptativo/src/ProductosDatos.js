import React,{Component} from "react";


class ProductosDatos extends Component{

   constructor(){
       super()

       this.state={
            botonComprar:"Comprar"
       }

    }
    handleClick=()=>{
     this.setState({
         botonComprar: "Gracias por su compra"
     })
}


    render(){
        return(
                
            <div className = "datos">
                <img src ={this.props.imagen}/>
                <p className ="datoNombre">{this.props.nombre}</p>
                <p className= "datoPrecio">{this.props.precio}</p>
                <p className="datoDescripcion">Descripcion:<br></br>{this.props.descripcion}</p>
                <p className= "datoSku">Sku:<br></br>{this.props.sku}</p>
                <p className= "datoCantDis">Disponible:<br></br>{this.props.cantDisponible}</p>
                <button onClick = {this.handleClick}>{this.state.botonComprar}</button>
            </div>
        )
    }
}

export default ProductosDatos;