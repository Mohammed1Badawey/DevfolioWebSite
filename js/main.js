var typed = new Typed(".auto-type", {
  strings: ["Developer", "Programmer", "Photographer", "Freelancer"],
  typeSpeed: 80,
  backSpeed: 90,
  startDelay: 200,
  backDelay: 800,
  loop: true,
});

// counter js-count


let nums = document.querySelectorAll(".js-count");
let section = document.querySelector(".counter");
let started = false; 

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - window.innerHeight) {
    if (!started) {
      nums.forEach((num) => startCount(num)); 
      started = true; 
    }
  }
};

function startCount(el) {
  let goal = el.dataset.goal; 
  let count = setInterval(() => {
    el.textContent++; 
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal); 
}
