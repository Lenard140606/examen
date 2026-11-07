import { useGaleriaProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList.jsx";
import CarritoPanel from "./components/CarritoPanel.jsx";

const TiendaApp = () => {
  const {
    productos,
    carrito,
    procesando,
    incidencia,
    conmutarCarrito,
    figuraEnCarrito,
    totalCarrito,
  } = useGaleriaProductos();

  return (
    <div>
      <h1>Mi Tienda de Productos</h1>

      {procesando && (
        <p className="mensaje">Cargando productos...</p>
      )}

      {incidencia && (
        <p className="mensaje error">
          Error: {incidencia}
        </p>
      )}

      {!procesando && !incidencia && (
        <div className="layout">
          <ProductoList
            productos={productos}
            figuraEnCarrito={figuraEnCarrito}
            alHacerClic={conmutarCarrito}
          />

          <CarritoPanel
            carrito={carrito}
            alHacerClic={conmutarCarrito}
            totalCarrito={totalCarrito}
          />
        </div>
      )}
    </div>
  );
};

export default TiendaApp;