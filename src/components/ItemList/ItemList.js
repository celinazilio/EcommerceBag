import Item from "../Item/Item"

const ItemList = ({ items }) => {

    return (
        <div>
            <h2>Nuestras donas</h2>
            {
                items.map((item) => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemList