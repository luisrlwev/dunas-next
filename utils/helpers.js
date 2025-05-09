// Función para recortar texto a una longitud específica
export function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

// Función opcional para eliminar etiquetas HTML de una cadena
export function stripHtml(html) {
    return html.replace(/<[^>]*>/g, '');
}

// Formatear la fecha
export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() retorna un rango de 0-11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

// Mensajes en los comentarios
export function obtenerMensajeComentarios(numComentarios) {
    if (numComentarios === 0) {
      return "No hay comentarios";
    } else {
      return `${numComentarios} comentario${numComentarios > 1 ? 's' : ''}`;
    }
  }
