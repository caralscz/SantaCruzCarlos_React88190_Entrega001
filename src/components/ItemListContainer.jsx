import '../css/ItemListContainer.css'; // Importo el archivo CSS

const ItemListContainer = (props) => {
return (
    <div>
        <h1 className="titulo-principal" >{props.saludo1}</h1>
        <h3 >{props.saludo2}</h3>
        <h4 >{props.saludo3}</h4>
    </div>   
)
}

export default ItemListContainer