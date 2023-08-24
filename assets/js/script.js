const image = document.querySelectorAll(".img-container");

image.forEach((imgItem, idx) => {
  imgItem.addEventListener("click", () => expandImage(idx) );
})

function expandImage(idx) {
  const active = document.querySelector(".active");

  active.classList.remove("active");
  image[idx].classList.add("active");
}

