window.addEventListener("mousemove", (e) => {
  const content = document.querySelector(".content");
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const offsetX = (mouseX - window.innerWidth / 2) * 0.01;
  const offsetY = (mouseY - window.innerHeight / 2) * 0.01;

  content.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateX(${-offsetY}deg) rotateY(${-offsetX}deg)`;
});


setTimeout(() => {
  scrollToTop();
  const loader = document.getElementById("loader");
  const gallery_content = document.getElementById("gallery-content");
  const header = document.getElementById("header");

  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
    gallery_content.style.opacity = 1;
    gallery_content.style.top = 0;
    gallery_content.style.pointerEvents = "auto";
    header.style.opacity = 1;
    header.style.left = 0;
  }, 500);
}, 1500);


const btn_gallery = document.getElementById("btn-gallery");
const btn_about = document.getElementById("btn-about");
const btn_profile = document.getElementById("btn-profile");

const gallery_content = document.getElementById("gallery-content");
const about_content = document.getElementById("about-content");
const profile_content = document.getElementById("profile-content");

btn_gallery.addEventListener("click", () => {
  scrollToTop();
  gallery_content.style.opacity = 1;
  gallery_content.style.top = 0;
  gallery_content.style.pointerEvents = "auto";
  about_content.style.opacity = 0;
  about_content.style.top = "20px";
  about_content.style.pointerEvents = "none";
  profile_content.style.opacity = 0;
  profile_content.style.top = "20px";
  profile_content.style.pointerEvents = "none";
});

btn_about.addEventListener("click", () => {
  scrollToTop();
  gallery_content.style.opacity = 0;
  gallery_content.style.top = "20px";
  gallery_content.style.pointerEvents = "none";
  about_content.style.opacity = 1;
  about_content.style.top = 0;
  about_content.style.pointerEvents = "auto";
  profile_content.style.opacity = 0;
  profile_content.style.top = "20px";
  profile_content.style.pointerEvents = "none";
});

btn_profile.addEventListener("click", () => {
  scrollToTop();
  gallery_content.style.opacity = 0;
  gallery_content.style.top = "20px";
  gallery_content.style.pointerEvents = "none";
  about_content.style.opacity = 0;
  about_content.style.top = "20px";
  about_content.style.pointerEvents = "none";
  profile_content.style.opacity = 1;
  profile_content.style.top = 0;
  profile_content.style.pointerEvents = "auto";
});

const btn_go_top = document.getElementById("btn-go-top");
btn_go_top.addEventListener("click", () => {
  scrollToTop();
});

function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
  });
}