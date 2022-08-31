import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../img/bici banner 1.jpg';
import banner2 from '../img/bici banner 2.jpg';
import banner3 from '../img/bici banner 3.png';
import '../Components/components.css';
import { useEffect,useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList";



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  imagen_carrousel"
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bici Mundo</h3>
            <p>"BE THE CHANGE"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imagen_carrousel"
            src={banner1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="CAPTION_CARROUSEL">Hasta 50% OFF</h3>
            <p className="CAPTION_CARROUSEL">En la mayoria de nuestros productos</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen_carrousel"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="CAPTION_CARROUSEL">Envios a todo el País</h3>
            <p className="CAPTION_CARROUSEL">
              Vía ANDREANI
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 className="productos-h2">Nuestros Productos</h2>
      <div className="productos-flex container">
        
  
        <ItemList productos={productos}/>
        
        
        

      </div>
    </div>

  )
}
export default ItemListContainer;














