// Es un componente destinado a mostrar información breve del producto que el user clickeará para acceder a los detalles
import { Link } from "react-router-dom"


 const Item = ({item}) => {

    return (
        <div className="section">
            <h2>{item.nombre}</h2>
            <img src={item.img} />
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2">Más</button>
            </Link>
        </div>
    )
}


export default Item