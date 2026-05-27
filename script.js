function loadpage(page){

    fetch(page)
    .then(response => response.text())
    .then(data => {

        document.getElementById("content").innerHTML = data;

    })
    
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }