
var facebookModal = document.getElementById("facebookModal");
var twitterModal = document.getElementById("twitterModal");
var instagramModal = document.getElementById("instagramModal");


var facebookLink = document.getElementById("facebookLink");
var twitterLink = document.getElementById("twitterLink");
var instagramLink = document.getElementById("instagramLink");


var closeButtons = document.getElementsByClassName("close");


facebookLink.onclick = function() {
    facebookModal.style.display = "block";
}
twitterLink.onclick = function() {
    twitterModal.style.display = "block";
}
instagramLink.onclick = function() {
    instagramModal.style.display = "block";
}


for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        this.parentElement.parentElement.style.display = "none";
    }
}


window.onclick = function(event) {
    if (event.target === facebookModal) {
        facebookModal.style.display = "none";
    }
    if (event.target === twitterModal) {
        twitterModal.style.display = "none";
    }
    if (event.target === instagramModal) {
        instagramModal.style.display = "none";
    }
}


document.getElementById("facebookForm").onsubmit = function(event) {
    event.preventDefault();
    document.getElementById("facebookForm").style.display = "none";
    document.getElementById("facebookThanks").style.display = "block";
}

document.getElementById("twitterForm").onsubmit = function(event) {
    event.preventDefault();
    document.getElementById("twitterForm").style.display = "none";
    document.getElementById("twitterThanks").style.display = "block";
}

document.getElementById("instagramForm").onsubmit = function(event) {
    event.preventDefault();
    document.getElementById("instagramForm").style.display = "none";
    document.getElementById("instagramThanks").style.display = "block";
}
