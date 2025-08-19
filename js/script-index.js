// Realiza una solicitud HTTP a la API pública para obtener todos los posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json()) // Convierte la respuesta a formato JSON
  .then((posts) => {
    // Obtiene el contenedor de posts
    const container = document.getElementById("posts-container");

    // Recorre cada post recibido
    posts.forEach((post) => {
      // Crea un div para la tarjeta
      const card = document.createElement("div");
      card.className = "card"; // Aplica clase CSS

      // Rellena la tarjeta con título, un fragmento de texto y botón
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body.substring(0, 60)}...</p>
        <button onclick="verPost(${post.id})">Leer más</button>
      `;

      // Agrega la tarjeta al contenedor
      container.appendChild(card);
    });
  });

// Función que redirige a la página de detalle del post
function verPost(id) {
  // Cambia la URL, enviando el ID como parámetro
  window.location.href = `post.html?id=${id}`;
}
