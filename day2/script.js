const activeCircle = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const paras = document.querySelectorAll(".para");

let currentActive = 1;
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > activeCircle.length) {
    currentActive = activeCircle.length;
  }
  update1();
  update();
});

previous.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update1();
  update();
});

const update1 = function () {
  if (currentActive !== `.content--${currentActive}`) {
    paras.forEach((val) => val.classList.remove("active"));
  }
  document.querySelector(`.content--${currentActive}`).classList.add("active");
};

const update = function () {
  activeCircle.forEach(function (cir, ind) {
    if (ind < currentActive) {
      cir.classList.add("activecir");
    } else {
      cir.classList.remove("activecir");
    }
  });
  const actives = document.querySelectorAll(".activecir");

  progress.style.width =
    ((actives.length - 1) / (activeCircle.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    previous.disabled = true;
  } else if (currentActive === activeCircle.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    previous.disabled = false;
  }
};
