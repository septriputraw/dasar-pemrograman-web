//menu
function myMenu() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

//theme
function theme() {
    var mode = document.body;
    mode.classList.toggle("dark-body");
    
    if(mode.classList.contains("dark-body")) {
        document.getElementById("tema").innerHTML = "&#9788;";
    }
    else {
        document.getElementById("tema").innerHTML = "&#9789;";
    }
}
