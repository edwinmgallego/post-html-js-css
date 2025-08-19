const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((res) => res.json())
  .then((post) => {
    const container = document.getElementById("post-container");
    container.innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `;
  });
