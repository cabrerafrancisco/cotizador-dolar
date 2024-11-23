//ahora consumiremos una api para tomar los datos
async function obtenerCotizaciones() {
    try {
        const respuesta = await fetch('https://dolarapi.com/v1/dolares');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);
        }
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error al obtener cotizaciones:', error.message);
        return null;
    }
}

//funcion para mostrar las cotizaciones
async function mostrarCotizaciones() {
    const seccionCotizaciones = document.getElementById('cotizaciones');
    seccionCotizaciones.innerHTML = '<p>Cargando cotizaciones...</p>';//mensaje de espera que es teponral
    const datos = await obtenerCotizaciones();
    if (!datos) {
        seccionCotizaciones.innerHTML = '<p>Error al cargar cotizaciones (revisar resp api)!!!</p>'
        return;
    }

// Limpiar las cotizaciones antes de agregar nuevas
seccionCotizaciones.innerHTML = '';

// Iterar sobre los datos y mostrar las cotizaciones
    datos.forEach((dolar) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${dolar.nombre} (${dolar.casa.charAt(0).toUpperCase() + dolar.casa.slice(1)})</h3>
        <p>Compra: $ ${dolar.compra.toFixed(2)}</p>
        <p>Venta: $ ${dolar.venta.toFixed(2)}</p>
        <p>Última actualización: ${new Date(dolar.fechaActualizacion).toLocaleString()}</p>
    `;
    seccionCotizaciones.appendChild(card);
    });
}

// Cargar las cotizaciones al iniciar la página
mostrarCotizaciones();