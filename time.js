let showTime = false;
const timeDisplay = document.getElementById("time-display");
const timeButton = document.getElementById("time-button");

function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
}

timeButton.addEventListener("click", function() {
    showTime = !showTime; // Переключаем состояние показа времени
    timeDisplay.style.display = showTime ? "block" : "none"; // Показываем или скрываем время

    if (showTime) {
        timeButton.style.transition = "transform 0.5s"; // Добавляем плавный переход
        timeButton.style.transform = "rotate(90deg)"; // Поворачиваем на 90 градусов вправо
        updateTime(); // Обновляем время
        setInterval(updateTime, 1000); // Обновляем время каждую секунду
    } else {
        timeButton.style.transform = "rotate(0deg)"; // Поворачиваем на 90 градусов влево
    }
});
