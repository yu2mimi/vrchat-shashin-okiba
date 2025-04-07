fetch("assets/json/data.json")
  .then(response => response.json())
  .then(data => {
    const image_content = document.getElementById("image-content");

    data.forEach((photo) => {
      const div = document.createElement("div");
      div.className = "image-box";
      // div.style.width = "24vw";
      // div.style.height = "25vw";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "toggle";
      input.id = `toggle${photo.id}`;

      const img = document.createElement("img");
      img.src = `assets/image/gallery/${photo.url}`;
      img.alt = `Photo${photo.id}`;
      img.className = "image";
      img.style.objectPosition = photo.object_position;
      img.style.objectFit = "cover";

      const label = document.createElement("label");
      label.className = "img-label";
      label.htmlFor = `toggle${photo.id}`;
      label.style.objectFit = "cover";

      const text_date = document.createElement("p");
      text_date.className = "date-text";
      text_date.textContent = photo.date;
      text_date.style.zIndex = 3;

      label.addEventListener("click", () => {
        if(img.style.objectFit == "cover"){
          img.style.objectFit = "fill";
          label.style.objectFit = "fill";
          if(photo.width > photo.height){
            div.style.width = "80vw";
            div.style.height = `${80*photo.height/photo.width}vw`;
          }else{
            div.style.width = `${90*photo.width/photo.height}vh`;
            div.style.height = "90vh";
          }

          setTimeout(() => {
            const rect = div.getBoundingClientRect();
            const image_center = rect.top + rect.height / 2
            const offset = image_center + window.scrollY - window.innerHeight / 2 ;
            window.scrollTo({
              top: offset,
              behavior: "smooth"
            });
          }, 200);
        }else{
          img.style.objectFit = "cover";
          label.style.objectFit = "cover";
          div.style.width = "";
          div.style.height = "";
        }

      })

      div.appendChild(input);
      div.appendChild(img);
      div.appendChild(label);
      div.appendChild(text_date);

      image_content.appendChild(div)
    });
  });