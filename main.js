user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Hi " + user_name + "! " + "     " + "    Welcome To Object Detection Web App        " + "           (also click to go back)";


function d() {
    window.location = "hi.html";
}

