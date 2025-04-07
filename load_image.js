fetch('assets/json/data.json')
  .then(response => response.json())
  .then(data => {
    const image_content = document.getElementById("image-content");

    data.forEach((photo) => {
      const div = document.createElement("div");
      div.className = "image-box";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "toggle";
      input.id = `toggle${photo.id}`;

      const img = document.createElement("img");
      img.src = `assets/image/gallery/${photo.url}`;
      img.alt = `Photo${photo.id}`;
      img.className = "image";
      img.style.objectPosition = photo.object_position;

      const label = document.createElement("label");
      label.className = "img-label";
      label.for = `toggle${photo.id}`;

      div.appendChild(input);
      div.appendChild(img);
      div.appendChild(label);

      image_content.appendChild(div)
    });
  });