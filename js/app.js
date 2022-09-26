const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
})

let counter = 0;

prevBtn.addEventListener('click', function() {
  counter--;
  carousel()
  console.log(counter);
})

nextBtn.addEventListener('click', function() {
  counter++;
  carousel()
  console.log(counter);
})

function carousel() {
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  console.log(slides.length);

  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none';
  }

  slides.forEach(function(slide) {
    slide.style.transform = `translate(-${counter * 100}%)`;
  })
}



