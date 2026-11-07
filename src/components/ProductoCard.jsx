const ProductoCard = ({ producto, destacado, alHacerClic }) => {
  return (
    <div className={`card ${destacado ? "en-carrito" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />

      <h4>{producto.title}</h4>

      <p className="categoria">
        {producto.category}
      </p>

      <p className="precio">
        ${producto.price.toFixed(2)}
      </p>

      <button onClick={() => alHacerClic(producto)}>
        {destacado ? "Quitar del carrito" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ProductoCard;