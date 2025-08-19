fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    const container = document.getElementById("posts-container");
    posts.forEach((post) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body.substring(0, 60)}...</p>
                <button onclick="verPost(${post.id})">Leer más</button>
            `;
      container.appendChild(card);
    });
  });

function verPost(id) {
  window.location.href = `post.html?id=${id}`;
}
