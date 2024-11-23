# Cotizador de Dólar

Este proyecto consiste en una app web que muestra las cotizaciones del dólar en Argentina, incluyendo el dólar oficial, blue, tarjeta, MEP, y otros tipos de cambio relevantes. Los datos se obtienen de una API pública para mostrar información actualizada al usuario.

## Etapas del Proyecto

1. **Estructura HTML y CSS Básica**
   - Creación de una página sencilla con un diseño responsive.
   - Definición de un contenedor para las cotizaciones.
   - Implementación de estilos básicos para la página, el encabezado, el cuerpo y el footer.

2. **Funcionalidad con JavaScript**
   - Implementación de JavaScript para obtener las cotizaciones del dólar y utilizando mathrandom para simular actualizacion.
   - Adición de un botón para actualizar las cotizaciones.

3. **Integración con API**
   - Integración con la API **Dólar API** (https://dolarapi.com) para obtener las cotizaciones actualizadas en tiempo real.
   - Visualización de las cotizaciones en **cards** con los valores de compra y venta.
   
4. **Mejoras visuales**
   - Aplicación de transiciones y efectos de hover en las **cards** para un diseño más interactivo.

## Instalación

Para levantar este proyecto en tu máquina local, sigue estos pasos:

### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Safari, etc.).

### Informacion sobre API:

Actualmente estamos utilizando la API **Dólar API** (https://dolarapi.com) y consumiendo solamente las cotizaciones para argentina (tiene muchas mas funcionalidades)
Tiene un formato de Json asi:
```json
[
  {
    "moneda": "USD",
    "casa": "oficial",
    "nombre": "Oficial",
    "compra": 986.5,
    "venta": 1026.5,
    "fechaActualizacion": "2024-11-22T15:03:00.000Z"
  }
]
```

### Pasos para levantar el proyecto:

**Como se abre el proyecto:**

* Navega a la carpeta del proyecto:
* bash
* Copiar código
* cd cotizador-dolar
* Abrir archivo index.html

### Futuras mejoras:

* *Integración con más APIs*: Por ejemplo que agregue cotizaciones de criptos.
* *Filtrar las cards*: Esto serviria para que solo veamos las que quieramos y no sea tan pesado a la vista tantas cards.
* *Optimizar la app web con algun framework*: Esto daria lugar a nuevas funcionalidades y mejor flujo en la web.
