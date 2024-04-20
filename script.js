"use script";

const projects = [
  {
    img: "./projectImages/Clock.png",
    title: "A Simple Clock",
    descrption:
      "The first thing I built was a simple javascript clock! It's incredibly simple... but damn it looks good, and it can tell the time like nobody's business.",
  },
  {
    img: "./projectImages/QuoteGen.png",
    title: "Quote Generator",
    descrption:
      "An introductory javascript project that cycles through quotes randomly",
  },
  {
    img: "./projectImages/ToDo.png",
    title: "ToDo List / Pomodoro study timer",
    descrption:
      "This is still pretty introductory, but has actually been surprisingly useful - I plan on expanding on this",
  },
  {
    img: "./projectImages/Portfolio.png",
    title: "This Personal Website",
    descrption:
      "Believe it or not, hiring managers were indimidated by me, and ignoring my applications! so I built this site to show you, really, I'm just like everyone else. I've probably even (Intentionally) left a few mistakes in."
  },
  {
    img: "./projectImages/WhoWantsToHireLiam.png",
    title: "Who Wants To Hire Liam? Quiz Game!",
    descrption:
      "Learn a little bit about me, what makes me so much better than all the other smelly Junior devs applying for this position!"
  },
];
let projectCounter = 0;

screen.orientation.lock('portrait');
// // get the header nav buttons
// const skillsButton = document.querySelector("");
// const projectsButton = document.querySelector("");
// const contactButton = document.querySelector("");

// get the carousel buttons
const carouselLeft = document.querySelector(".btnLeft");
const carouselRight = document.querySelector(".btnRight");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const dots = [dot1, dot2, dot3, dot4, dot5];

let activeDot = dot1;

// get project elements
const projectImage = document.querySelector(".projectImage");
const projectTitle = document.querySelector(".projectTitle");
const projectDescription = document.querySelector(".projectDescription");

//////////////////////////////////////////////////////////////////
// Carousel Stuff
carouselLeft.addEventListener("click", () => {
  if (projectCounter > 0) {
    projectCounter--;
    changeProject();
    activeDot = dots[projectCounter];
    setActiveDot(activeDot);
  }
});
carouselRight.addEventListener("click", () => {
  if (projectCounter < 4) {
    projectCounter++;
    changeProject();
    activeDot = dots[projectCounter];
    setActiveDot(activeDot);
  }
});

dot1.addEventListener("click", () => {
  projectCounter = 0;
  changeProject();
  activeDot = dot1;
  setActiveDot(activeDot);
});
dot2.addEventListener("click", () => {
  projectCounter = 1;
  changeProject();
  activeDot = dot2;
  setActiveDot(activeDot);
});
dot3.addEventListener("click", () => {
  projectCounter = 2;
  changeProject();
  activeDot = dot3;
  setActiveDot(activeDot);
});
dot4.addEventListener("click", () => {
  projectCounter = 3;
  changeProject();
  activeDot = dot4;
  setActiveDot(activeDot);
});
dot5.addEventListener("click", () => {
  projectCounter = 4;
  changeProject();
  activeDot = dot5;
  setActiveDot(activeDot);
});

const changeProject = function () {
  projectImage.src = projects[projectCounter].img;
  projectTitle.innerText = projects[projectCounter].title;
  projectDescription.innerText = projects[projectCounter].descrption;
};
const setActiveDot = function (dot) {
  console.log(dot);
  dot1.classList.remove("dotActive");
  dot2.classList.remove("dotActive");
  dot3.classList.remove("dotActive");
  dot4.classList.remove("dotActive");
  dot5.classList.remove("dotActive");
  dot.classList.add("dotActive");
};

// Smooth Scrolling stuff
