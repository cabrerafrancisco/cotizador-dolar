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
    // Seleccionar el contenedor de cotizaciones
    const seccionCotizaciones = document.getElementById('cotizaciones');
    if (!seccionCotizaciones) {
      console.error('Error: No se encontró el contenedor con el ID "cotizaciones".');
      return;
    }
  
    // Crear la card de compra
    const cardCompra = document.createElement('div');
    cardCompra.className = 'card';
    cardCompra.innerHTML = `
      <h3>Tabla de valores de compra</h3>
      <p>Dólar oficial: $ ${cotizaciones.compra.oficial}</p>
      <p>Dólar blue: $ ${cotizaciones.compra.blue}</p>
      <p>Dólar tarjeta: $ ${cotizaciones.compra.tarjeta}</p>
      <p>Dólar MEP: $ ${cotizaciones.compra.mep}</p>
    `;
  
    // Crear la card de venta
    const cardVenta = document.createElement('div');
    cardVenta.className = 'card';
    cardVenta.innerHTML = `
      <h3>Tabla de valores de venta</h3>
      <p>Dólar oficial: $ ${cotizaciones.venta.oficial}</p>
      <p>Dólar blue: $ ${cotizaciones.venta.blue}</p>
      <p>Dólar tarjeta: $ ${cotizaciones.venta.tarjeta}</p>
      <p>Dólar MEP: $ ${cotizaciones.venta.mep}</p>
    `;
  
    // Limpiar las cotizaciones antes de agregar nuevas
    seccionCotizaciones.innerHTML = '';
  
    // Agregar las cards al contenedor
    seccionCotizaciones.appendChild(cardCompra);
    seccionCotizaciones.appendChild(cardVenta);
  }
  
  // Función para actualizar las cotizaciones con valores aleatorios
  function actualizarCotizaciones() {
    cotizaciones.compra.oficial = (900 + Math.random() * 100).toFixed(2);
    cotizaciones.compra.blue = (1100 + Math.random() * 100).toFixed(2);
    cotizaciones.compra.tarjeta = (Math.random() * 1000).toFixed(2);
    cotizaciones.compra.mep = (1100 + Math.random() * 50).toFixed(2);
  
    cotizaciones.venta.oficial = (950 + Math.random() * 100).toFixed(2);
    cotizaciones.venta.blue = (1150 + Math.random() * 100).toFixed(2);
    cotizaciones.venta.tarjeta = (1500 + Math.random() * 200).toFixed(2);
    cotizaciones.venta.mep = (1100 + Math.random() * 50).toFixed(2);
  
    // Mostrar las cotizaciones actualizadas
    mostrarCotizaciones();
  }
  
  // Crear un botón para actualizar las cotizaciones
  const actualizarBtn = document.createElement('button');
  actualizarBtn.textContent = 'Actualizar Cotizaciones';
  actualizarBtn.style.margin = '20px';
  actualizarBtn.style.padding = '10px 20px';
  actualizarBtn.style.fontSize = '16px';
  actualizarBtn.style.cursor = 'pointer';
  actualizarBtn.addEventListener('click', actualizarCotizaciones);
  
  // Agregar el botón al DOM
  document.body.appendChild(actualizarBtn);
  
  // Llamar a la función inicial para mostrar las cotizaciones
  mostrarCotizaciones();
  