import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../img/bici banner 1.jpg';
import banner2 from '../img/bici banner 2.jpg';
import banner3 from '../img/bici banner 3.png';
import '../Components/components.css';
import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {


  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)

    pedirDatos()
      .then((res) => {
        if (!categoryId) {
          setProductos(res)
        } else {
          setProductos(res.filter((prod) => prod.category === categoryId))
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

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
      <div>
        <h2 className="productos-h2">Nuestros Productos</h2>
        <div>
          <h3>Categorias</h3>
          <div>
            <Link to='/productos/Mountain' className="categorias">Mountain </Link>
            <Link to='/productos/Racing' className="categorias">Racing</Link>
           S

          </div>
        </div>
        <div>

        {
          loading
            ? <h2>Cargando...</h2>
            :

            <div className="productos-flex container">


              <ItemList productos={productos} />




            </div>
        }
        </div>
      </div>
      </div>

      )
}
      export default ItemListContainer;









