const buttonLeft = document.querySelector('#slide-left');
const buttonRight = document.querySelector('#slide-right');
const slideContainer = document.querySelector('.slide-wrapper').clientWidth;
console.log(slideContainer);

const handleSlide = () => {
  let left = 0;
  buttonLeft.addEventListener('click', () => {
    document.querySelector('#slider').scrollTo({
      left: (left -= slideContainer),
      behavior: 'smooth',
    });
    console.log(left);
  });

  buttonRight.addEventListener('click', () => {
    document.querySelector('#slider').scrollTo({
      left: (left += slideContainer),
      behavior: 'smooth',
    });
    console.log(left);
  });
};

handleSlide();
