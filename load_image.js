fetch('assets/json/data.json')
  .then(response => response.json())
  .then(data => {
    const image_content = document.getElementById("image-content");

    data.forEach((photo) => {
      console.log(photo.id);
      const div = document.createElement("div");
      div.class = "image-content";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.class = "toggle";
      input.id = `toggle${photo.id}`;

      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = `Photo${photo.id}`;
      img.class = "image";
      img.style.objectPosition = photo.object_position;

      const label = document.createElement("label");
      label.class = "img-label";
      label.for = `toggle${photo.id}`;

      div.appendChild(input);
      div.appendChild(img);
      div.appendChild(label);
    });

    image_content.appendChild(img)
  });