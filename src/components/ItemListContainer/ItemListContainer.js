import { useEffect, useState } from "react"
import { pedirDatos } from "../../Content/pedirDatos"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)


  // const params = useParams()
  const { categoryId } = useParams()
  console.log(categoryId)


  useEffect(() => {
    setLoading(true)

    pedirDatos()
      .then((resp) => {
        if (!categoryId) {
          setItems(resp)
        } else {
          setItems(resp.filter((item) => item.categoria === categoryId))
        }
      })
      .catch((error) => {
        console.log('ERROR', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

    return (
    <section className="container my-5">
     {
        loading
            ?
            <div className="text-center">
              <Spinner Spinner animation="border" role="status">
                <span className="visually-hidden">Cargando...</span>  </Spinner></div>
            
          : <ItemList items={items}></ItemList>
      }

    </section>
  )
}
  

