import { useEffect, useState } from "react";
import { solicitarProductos } from "../services/fetchProductos";

export const useGaleriaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [procesando, setProcesando] = useState(true);
  const [incidencia, setIncidencia] = useState("");

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setProcesando(true);

        const datos = await solicitarProductos();

        setProductos(datos);
      } catch (error) {
        setIncidencia(error.message);
      } finally {
        setProcesando(false);
      }
    };

    cargarProductos();
  }, []);

  const conmutarCarrito = (producto) => {
    setCarrito((actual) => {
      const existe = actual.some((item) => item.id === producto.id);

      if (existe) {
        return actual.filter((item) => item.id !== producto.id);
      }

      return [...actual, producto];
    });
  };

  const figuraEnCarrito = (id) => {
    return carrito.some((item) => item.id === id);
  };

  const totalCarrito = carrito.reduce(
    (total, producto) => total + producto.price,
    0
  );

  return {
    productos,
    carrito,
    procesando,
    incidencia,
    conmutarCarrito,
    figuraEnCarrito,
    totalCarrito,
  };
};