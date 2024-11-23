// Datos iniciales de las cotizaciones
const cotizaciones = {
    compra: {
      oficial: 969.50,
      blue: 1160.00,
      tarjeta: 0.00,
      mep: 1135.90,
    },
    venta: {
      oficial: 1009.50,
      blue: 1180.00,
      tarjeta: 1615.20,
      mep: 1135.70,
    }
  };
  
  // Función para mostrar las cotizaciones
  function mostrarCotizaciones() {
    const seccionCotizaciones = document.getElementById('cotizaciones');
    
    // Crear la card de compra
    const cardCompra = document.createElement('div');
    cardCompra.className = 'card';
    cardCompra.innerHTML = `
      <h3>Tabla de valores de compra</h3>
      <p>Dólar oficial: $ ${cotizaciones.compra.oficial.toFixed(2)}</p>
      <p>Dólar blue: $ ${cotizaciones.compra.blue.toFixed(2)}</p>
      <p>Dólar tarjeta: $ ${cotizaciones.compra.tarjeta.toFixed(2)}</p>
      <p>Dólar MEP: $ ${cotizaciones.compra.mep.toFixed(2)}</p>
    `;
    
    // Crear la card de venta
    const cardVenta = document.createElement('div');
    cardVenta.className = 'card';
    cardVenta.innerHTML = `
      <h3>Tabla de valores de venta</h3>
      <p>Dólar oficial: $ ${cotizaciones.venta.oficial.toFixed(2)}</p>
      <p>Dólar blue: $ ${cotizaciones.venta.blue.toFixed(2)}</p>
      <p>Dólar tarjeta: $ ${cotizaciones.venta.tarjeta.toFixed(2)}</p>
      <p>Dólar MEP: $ ${cotizaciones.venta.mep.toFixed(2)}</p>
    `;
    
    // Agregar las cards al DOM
    seccionCotizaciones.appendChild(cardCompra);
    seccionCotizaciones.appendChild(cardVenta);
  }
  
  // Llamar a la función al cargar la página
  mostrarCotizaciones();
  