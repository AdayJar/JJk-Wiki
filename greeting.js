window.onload = function () {
    const savedName = localStorage.getItem("studentName");
    if (savedName) {
        // Если имя найдено, скрываем окно регистрации и показываем кнопку Logout
        document.getElementById("popup-overlay").style.display = "none";
        document.getElementById("logout-button").style.display = "block";
        alert(`Welcome back, ${savedName}! Glad to see you again!`);
    } else {
        // Если имя не найдено, показываем окно регистрации
        document.getElementById("popup-overlay").style.display = "flex";
    }
}

// Функция для приветствия студента и сохранения имени
function welcomeStudent() {
    const name = document.getElementById("student-name").value;
    if (name) {
        localStorage.setItem("studentName", name); // Сохраняем имя
        alert(`Good luck in the magical world, ${name}!`);
        document.getElementById("popup-overlay").style.display = "none"; // Скрываем окно регистрации
        document.getElementById("logout-button").style.display = "block"; // Показываем кнопку Logout
    } else {
        alert("Please enter your name."); // Запрашиваем ввод имени
    }
}

// Функция для выхода и удаления имени из localStorage
function logout() {
    localStorage.removeItem("studentName"); // Удаляем имя
    document.getElementById("popup-overlay").style.display = "flex"; // Показываем окно регистрации
    document.getElementById("logout-button").style.display = "none"; // Скрываем кнопку Logout
}