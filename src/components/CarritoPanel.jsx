const CarritoPanel = ({ carrito, alHacerClic, totalCarrito }) => {
  return (
    <aside className="carrito">
      <h3>Carrito ({carrito.length})</h3>

      {carrito.length === 0 && (
        <p>Tu carrito está vacío.</p>
      )}

      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <img src={producto.thumbnail} alt={producto.title} />

            <span>{producto.title}</span>

            <strong>${producto.price.toFixed(2)}</strong>

            <button onClick={() => alHacerClic(producto)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <p className="total">
        Total: ${totalCarrito.toFixed(2)}
      </p>
    </aside>
  );
};

export default CarritoPanel;