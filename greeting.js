function welcomeStudent() {
    const name = document.getElementById("student-name").value;
    if (name) {
        alert(`Good luck in the magical world, ${name}!`);
        document.getElementById("popup-overlay").style.display = "none";
    } else {
        alert("Please enter your name.");
    }
}
