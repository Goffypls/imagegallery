
document.addEventListener("DOMContentLoaded", function(){
var images = ["image1carr.jpg","image2carr.jpg","image3carr.jpg","image4carr.jpg"];
var currentImageIndex = 0;

var btnAnterior = document.getElementById("anterior");
var btnSiguiente = document.getElementById("siguiente");
var imgElement = document.getElementById("imagen");

btnAnterior.addEventListener("click", function(){
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentImageIndex];
});

btnSiguiente.addEventListener("click", function(){
    currentImageIndex = (currentImageIndex + 1 + images.length) % images.length;
    imgElement.src = images[currentImageIndex];
});

imgElement.src = images[currentImageIndex];
});