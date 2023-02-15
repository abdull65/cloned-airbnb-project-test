"strict";
let mySLidesImages1 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg1 = 0;
let prevBtn1 = document.querySelector("#chevron_left1");
let nextBtn1 = document.querySelector("#chevron_right1");
let changeSlideCarousel = document.getElementsByClassName("carousel_dot");

prevBtn1.addEventListener("click", function () {
  currentImg1--;
  if (currentImg1 < 0) {
    currentImg1 = mySLidesImages1.length - 1;
  }
  document.querySelector("#slideimg1").src = mySLidesImages1[currentImg1];
});
nextBtn1.addEventListener("click", function () {
  currentImg1++;
  if (currentImg1 > mySLidesImages1.length - 1) {
    currentImg1 = 0;
  }
  document.querySelector("#slideimg1").src = mySLidesImages1[currentImg1];
});
let mySLidesImages2 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg2 = 0;
let prevBtn2 = document.querySelector("#chevron_left2");
let nextBtn2 = document.querySelector("#chevron_right2");
console.log(prevBtn2, nextBtn2);
prevBtn2.addEventListener("click", function () {
  currentImg2--;
  if (currentImg2 < 0) {
    currentImg2 = mySLidesImages2.length - 1;
  }
  document.querySelector("#slideimg2").src = mySLidesImages2[currentImg2];
});
nextBtn2.addEventListener("click", function () {
  currentImg2++;
  if (currentImg2 > mySLidesImages2.length - 1) {
    currentImg2 = 0;
  }
  document.querySelector("#slideimg2").src = mySLidesImages2[currentImg2];
});
let mySLidesImages3 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg3 = 0;
let prevBtn3 = document.querySelector("#chevron_left3");
let nextBtn3 = document.querySelector("#chevron_right3");
console.log(prevBtn3, nextBtn3);
prevBtn3.addEventListener("click", function () {
  currentImg3--;
  if (currentImg3 < 0) {
    currentImg3 = mySLidesImages3.length - 1;
  }
  document.querySelector("#slideimg3").src = mySLidesImages3[currentImg3];
});
nextBtn3.addEventListener("click", function () {
  currentImg3++;
  if (currentImg3 > mySLidesImages3.length - 1) {
    currentImg3 = 0;
  }
  document.querySelector("#slideimg3").src = mySLidesImages3[currentImg3];
});
let mySLidesImages4 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg4 = 0;
let prevBtn4 = document.querySelector("#chevron_left4");
let nextBtn4 = document.querySelector("#chevron_right4");
console.log(prevBtn4, nextBtn4);
prevBtn4.addEventListener("click", function () {
  currentImg4--;
  if (currentImg4 < 0) {
    currentImg4 = mySLidesImages4.length - 1;
  }
  document.querySelector("#slideimg4").src = mySLidesImages4[currentImg4];
});
nextBtn4.addEventListener("click", function () {
  currentImg4++;
  if (currentImg4 > mySLidesImages4.length - 1) {
    currentImg4 = 0;
  }
  document.querySelector("#slideimg4").src = mySLidesImages4[currentImg4];
});
let mySLidesImages5 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg5 = 0;
let prevBtn5 = document.querySelector("#chevron_left5");
let nextBtn5 = document.querySelector("#chevron_right5");
console.log(prevBtn5, nextBtn5);
prevBtn5.addEventListener("click", function () {
  currentImg5--;
  if (currentImg5 < 0) {
    currentImg5 = mySLidesImages5.length - 1;
  }
  document.querySelector("#slideimg5").src = mySLidesImages5[currentImg5];
});
nextBtn5.addEventListener("click", function () {
  currentImg5++;
  if (currentImg5 > mySLidesImages5.length - 1) {
    currentImg5 = 0;
  }
  document.querySelector("#slideimg5").src = mySLidesImages5[currentImg5];
});
let mySLidesImages6 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg6 = 0;
let prevBtn6 = document.querySelector("#chevron_left6");
let nextBtn6 = document.querySelector("#chevron_right6");
console.log(prevBtn6, nextBtn6);
prevBtn6.addEventListener("click", function () {
  currentImg6--;
  if (currentImg6 < 0) {
    currentImg6 = mySLidesImages6.length - 1;
  }
  document.querySelector("#slideimg6").src = mySLidesImages6[currentImg6];
});
nextBtn6.addEventListener("click", function () {
  currentImg6++;
  if (currentImg6 > mySLidesImages6.length - 1) {
    currentImg6 = 0;
  }
  document.querySelector("#slideimg6").src = mySLidesImages6[currentImg6];
});
let mySLidesImages7 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg7 = 0;
let prevBtn7 = document.querySelector("#chevron_left7");
let nextBtn7 = document.querySelector("#chevron_right7");
console.log(prevBtn7, nextBtn7);
prevBtn7.addEventListener("click", function () {
  currentImg7--;
  if (currentImg7 < 0) {
    currentImg7 = mySLidesImages7.length - 1;
  }
  document.querySelector("#slideimg7").src = mySLidesImages7[currentImg7];
});
nextBtn7.addEventListener("click", function () {
  currentImg7++;
  if (currentImg7 > mySLidesImages7.length - 1) {
    currentImg7 = 0;
  }
  document.querySelector("#slideimg7").src = mySLidesImages7[currentImg7];
});
let mySLidesImages8 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg8 = 0;
let prevBtn8 = document.querySelector("#chevron_left8");
let nextBtn8 = document.querySelector("#chevron_right8");
console.log(prevBtn8, nextBtn8);
prevBtn8.addEventListener("click", function () {
  currentImg8--;
  if (currentImg8 < 0) {
    currentImg8 = mySLidesImages8.length - 1;
  }
  document.querySelector("#slideimg8").src = mySLidesImages8[currentImg8];
});
nextBtn8.addEventListener("click", function () {
  currentImg8++;
  if (currentImg8 > mySLidesImages8.length - 1) {
    currentImg8 = 0;
  }
  document.querySelector("#slideimg8").src = mySLidesImages8[currentImg8];
});
let mySLidesImages9 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg9 = 0;
let prevBtn9 = document.querySelector("#chevron_left9");
let nextBtn9 = document.querySelector("#chevron_right9");
console.log(prevBtn9, nextBtn9);
prevBtn9.addEventListener("click", function () {
  currentImg9--;
  if (currentImg9 < 0) {
    currentImg9 = mySLidesImages9.length - 1;
  }
  document.querySelector("#slideimg9").src = mySLidesImages9[currentImg9];
});
nextBtn9.addEventListener("click", function () {
  currentImg9++;
  if (currentImg9 > mySLidesImages9.length - 1) {
    currentImg9 = 0;
  }
  document.querySelector("#slideimg9").src = mySLidesImages9[currentImg9];
});
let mySLidesImages10 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg10 = 0;
let prevBtn10 = document.querySelector("#chevron_left10");
let nextBtn10 = document.querySelector("#chevron_right10");
console.log(prevBtn10, nextBtn10);
prevBtn10.addEventListener("click", function () {
  currentImg10--;
  if (currentImg10 < 0) {
    currentImg10 = mySLidesImages10.length - 1;
  }
  document.querySelector("#slideimg10").src = mySLidesImages10[currentImg10];
});
nextBtn10.addEventListener("click", function () {
  currentImg10++;
  if (currentImg10 > mySLidesImages10.length - 1) {
    currentImg10 = 0;
  }
  document.querySelector("#slideimg10").src = mySLidesImages10[currentImg10];
});
let mySLidesImages11 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg11 = 0;
let prevBtn11 = document.querySelector("#chevron_left11");
let nextBtn11 = document.querySelector("#chevron_right11");
console.log(prevBtn11, nextBtn11);
prevBtn11.addEventListener("click", function () {
  currentImg11--;
  if (currentImg11 < 0) {
    currentImg11 = mySLidesImages11.length - 1;
  }
  document.querySelector("#slideimg11").src = mySLidesImages11[currentImg11];
});
nextBtn11.addEventListener("click", function () {
  currentImg11++;
  if (currentImg11 > mySLidesImages11.length - 1) {
    currentImg11 = 0;
  }
  document.querySelector("#slideimg11").src = mySLidesImages11[currentImg11];
});
let mySLidesImages12 = [
  "images/galleryImg2.jpg",
  "images/galleryImg3.jpg",
  "images/galleryImg1.jpg",
];
let currentImg12 = 0;
let prevBtn12 = document.querySelector("#chevron_left12");
let nextBtn12 = document.querySelector("#chevron_right12");
console.log(prevBtn12, nextBtn12);
prevBtn12.addEventListener("click", function () {
  currentImg12--;
  if (currentImg12 < 0) {
    currentImg12 = mySLidesImages12.length - 1;
  }
  document.querySelector("#slideimg12").src = mySLidesImages12[currentImg12];
});
nextBtn12.addEventListener("click", function () {
  currentImg12++;
  if (currentImg12 > mySLidesImages12.length - 1) {
    currentImg12 = 0;
  }
  document.querySelector("#slideimg12").src = mySLidesImages12[currentImg12];
});
