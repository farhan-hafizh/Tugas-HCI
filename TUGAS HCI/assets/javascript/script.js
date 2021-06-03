

var slideIndex = 0;
// showSlides();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var templateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass = document.getElementById("password").value;
    var acc = document.getElementById("terms");

    if(document.getElementById("terms").checked){
        if (name != '' && email != '' && pass != '') {
            if (email.match(templateEmail)) {
                if (document.getElementById("male").checked || document.getElementById("female").checked) {
                    if (pass.length >= 6 && pass.length <=15) {
                        alert("You have finish registration.");
                        return true;
                    } else {
                        alert("Password must be at least 6 characters and not exceed 15 characters!");
                        return false;
                    }
                } else {
                    alert("You must select gender!");
                    return false;
                }
            } else {
                alert("Invalid Email Address!");
                return false;
            }
        } else {
            alert("All fields are required!");
            return false;
        }
    }
    else{
        alert("You need to Accept terms and condition")
        return false;
    }
}
