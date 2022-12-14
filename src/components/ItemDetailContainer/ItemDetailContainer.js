import { useEffect, useState } from "react"
import { pedirDatos } from "../../Content/pedirDatos"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                setItem(resp.find((item) => item.id === Number(itemId)))
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5">
            {
                loading
                    ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span> </Spinner>

                    : <ItemDetail item={item}></ItemDetail>
            }
        </section>
    )
}
