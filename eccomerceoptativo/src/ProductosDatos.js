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
                
            <div className = "datos" style={{backgroundImage: `url(${this.props.imagen})`}}>

                
                <div className="datosContenido">
                    <p className ="datoNombre">{this.props.nombre}</p>
                    <p className= "datoPrecio">{this.props.precio}</p>
                    
                    <p className="datoDescripcion"><span>Descripcion:</span></p>
                    <p className="datoDescripcion">{this.props.descripcion}</p>
                    <p className= "datoSku"><span>Sku:</span></p>
                    <p className= "datoSku">{this.props.sku}</p>
                    <p className= "datoCantDis"><span>Disponible:</span></p>
                    <p className= "datoCantDis">{this.props.cantDisponible}</p>
                    <button onClick = {this.handleClick}>{this.state.botonComprar}</button>

                    

                </div>
                
                <div>

                </div>
            </div>

            
        )
    }
}

export default ProductosDatos;