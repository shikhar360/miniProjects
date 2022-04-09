const pannels = document.querySelectorAll(".pannel");      //this will return a node list from which first we have to remove all the active classes from the element 
// console.log(pannels);
pannels.forEach((pan) =>
  pan.addEventListener("mouseenter", () => {
    removeActive();
    pan.classList.add("active");                               //and then we have to add the active classes to the clicked one or hovered one
  })
);
const removeActive = function () {
  pannels.forEach((pan) => pan.classList.remove("active"));
};
