let text$tag = document.querySelector(".fancy")
let text = text$tag.textContent
let splited$text = text.split('')

text$tag.innerHTML = ''

for(let i = 0; i < splited$text.length; i++) {
    if(splited$text[i] == " ") {
        splited$text[i] = "&nbsp"
    }

    text$tag.innerHTML += `<span>${splited$text[i]}</span>`
}


let k = 0

let interval = setInterval(() => {
    let spans = text$tag.querySelectorAll('span')
    let singlespan = spans[k]

    singlespan.className = 'fadeMove'

    k++

    if(k === spans.length) {
        clearInterval(interval)
    }
}, 90)



const slider = document.querySelector(".slider");

const slides = slider.querySelectorAll(".slide");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


let currSlide = 0;

const maxSlide = slides.length;

const goToSlide = function (slide = 1) {
  slides.forEach((s, i) => {
    s.style.transform = `translatex(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }

  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

const init = function () {
  goToSlide(0);
};

init();


let border$line = document.querySelector('.border-line')
let animatio$witdth = 0

window.onscroll = () => {


    if(this.oldcroll > this.scrollY) {
        animatio$witdth -= 2
    } else {
        animatio$witdth += 2
    }

    if(animatio$witdth >= 100) {
        animatio$witdth = 100
    } 

    if(animatio$witdth <= 0) {
        animatio$witdth = 0
    }
    
  border$line.style.width = animatio$witdth + '%'
    console.log(animatio$witdth)


    this.oldcroll = this.scrollY

}

AOS.init();




