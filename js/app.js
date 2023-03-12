let slideIndex = 0;
showSlides();
openNav();
closeNav();
window.onscroll = function() {
  scrollFunction(); 
};
function plusSlides(n){
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-image");
  let mainTitle = document.getElementById("banner-main-title");
  if(n > slides.length) {slideIndex = 1}
  if(n < 1) {slideIndex = slides.length}

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  // slides[slideIndex - 1].textContent = 'fehfiok';
  if(slideIndex - 1 === 0){
    mainTitle.textContent = "Find Alley | More";
  }else if(slideIndex - 1 === 1){
    mainTitle.textContent = "Riverside Abode | More";
  }else if(slideIndex - 1 === 2){
    mainTitle.textContent = "Duet Apartment | More";
  }else if(slideIndex - 1 === 3){
    mainTitle.textContent = "Revival House | More";
  }
  setTimeout(showSlides, 5000);
}

function scrollFunction() {
  if(document.documentElement.scrollHeight > 300){
    document.getElementById("header").className = "slideOpaque";
  }
  if(document.documentElement.scrollHeight > 1400){
    console.log(`aaaaaa: ${document.documentElement.scrollHeight}`);
    document.getElementsByClassName("content-description").className = "slideLeft";
  }
}

function openNav(){
  document.getElementById("mySideNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("mySideNav").style.width = "0";
}