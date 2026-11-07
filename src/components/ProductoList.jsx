import ProductoCard from "./ProductoCard.jsx";

const ProductoList = ({
  productos,
  figuraEnCarrito,
  alHacerClic,
}) => {
  return (
    <div className="grid">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          destacado={figuraEnCarrito(producto.id)}
          alHacerClic={alHacerClic}
        />
      ))}
    </div>
  );
};

export default ProductoList;