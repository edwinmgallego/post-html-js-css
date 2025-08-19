// Obtiene los parámetros de la URL (?id=1, por ejemplo)
const params = new URLSearchParams(window.location.search);
const id = params.get("id"); // Obtiene el valor del parámetro 'id'

// Realiza una solicitud HTTP para obtener el post específico por ID
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((res) => res.json()) // Convierte la respuesta en JSON
  .then((post) => {
    // Obtiene el contenedor donde se mostrará el post
    const container = document.getElementById("post-container");

    // Inserta el título y contenido del post en el contenedor
    container.innerHTML = `
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    `;
  });
