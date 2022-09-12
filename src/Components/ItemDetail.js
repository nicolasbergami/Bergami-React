import { useState } from "react"
import '../Components/components.css'
import Contador from './Contador'
import Select from "./Select";


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
            
        }
        console.log(itemToCart)
    }
    return (
        <div className="container container-details">
            <img src={item.img} className="img-detail"/>
            <div className='description'>
            <h3>{item.nombre} </h3>
            <p>Descripcion: {item.desc}</p>
            <p>Categoria: {item.categoria}</p>
            <h4>Precio: ${item.precio}</h4>
            <Contador 
             max={item.stock}
             counter={cantidad}
             setCounter={setCantidad}
             handleAgregar={handleAgregar}/>
            </div>
        </div>
    )
}

export default ItemDetail