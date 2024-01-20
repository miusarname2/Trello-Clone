"use client";
export default function Page() {
  // Verificar si estamos en el lado del cliente
  if (process.browser) {
    // Código que solo se ejecuta en el navegador
    window.location.href = "/login";
  }

  // El resto del componente o código que se ejecutará en el servidor durante la construcción
  // Puedes dejarlo vacío si no hay nada más que hacer en el servidor

  return <div>Contenido de la página</div>;
}

