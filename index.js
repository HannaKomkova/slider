const buttonBack = document.querySelector('#back');
const buttonNext = document.querySelector('#next');
const sliderImg = document.querySelector('img');
const titleOfCard = document.querySelector('h2');
const descriptionOfCard = document.querySelector('p');

const slides = [
    {
      img: "img1.jpg",
      title: "Кот из пакета",
      description: "Естественная среда обитания этой породы - шуршащие пакеты. Они любят там прятаться и делать неожиданный тыгыдык"
    },
    {
      img: "img2.jpg",
      title: "Кот сердечный",
      description: "Эта порода подарит вам много любви и ласки за кусочек колбаски"
    },
    {
      img: "img3.jpg",
      title: "Кот в шапочке",
      description: "Он как кот в сапогах, но только в шапочке. Такой же сказочный и обаятельный"
    }
];

let i = 0;

const showNext = () => {

    i === slides.length-1 ? i=0  : i++; 

    sliderImg.src = slides[i].img;
    titleOfCard.textContent = slides[i].title;
    descriptionOfCard.textContent = slides[i].description;
    
}

buttonNext.addEventListener('click', () =>   showNext())


setInterval(showNext, 3000);

buttonBack.addEventListener('click', () => {

    i === 0 ? i = 2  : i--;
    
    sliderImg.src = slides[i].img;
    titleOfCard.textContent = slides[i].title;
    descriptionOfCard.textContent = slides[i].description;

})