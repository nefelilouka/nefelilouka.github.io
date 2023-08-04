function filterSelection(c) {
        var elements = document.getElementsByClassName("post");

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains(c)) {
                elements[i].style.display = "block";
            } else {
                elements[i].style.display = "none";
            }
        }
    }

function showAll() {
        var elements = document.getElementsByClassName("post");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
    }


function myFunction() {
  var element = document.getElementById("main-menu");
  var element2 = document.getElementById("mobile-menu-icon");
  element.classList.toggle("show");
  element2.classList.toggle("show2");
}