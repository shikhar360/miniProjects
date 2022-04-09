const pannels = document.querySelectorAll(".pannel");
// console.log(pannels);
pannels.forEach((pan) =>
  pan.addEventListener("mouseenter", () => {
    removeActive();
    pan.classList.add("active");
  })
);
const removeActive = function () {
  pannels.forEach((pan) => pan.classList.remove("active"));
};
