// greeting.js

function showGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greetingMessage = '';
    let backgroundImage = '';

    if (hour < 12) {
        greetingMessage = 'Доброе утро!';
        backgroundImage = 'https://i.ytimg.com/vi/zX5JUEynsGs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGBEgYChyMA8=&rs=AOn4CLCAmTMbpHE8wd_8xjBWHetKJvZwHw'; // Утро
    } else if (hour < 18) {
        greetingMessage = 'Добрый день!';
        backgroundImage = 'https://blog.okko.tv/thumb/1280x720/smart/filters:quality(75)/imgs/2024/03/04/07/6381971/7bc9b20e646a954994b9b12b58a9bb6a077f6c7a.jpg'; // День
    } else if (hour < 22) {
        greetingMessage = 'Добрый вечер!';
        backgroundImage = 'https://img.freepik.com/premium-photo/two-individuals-sitting-by-lake-watching-beautiful-sunset-with-vibrant-orange-red-hues-ref_1053268-30319.jpg?semt=ais_hybrid'; // Вечер
    } else {
        greetingMessage = 'Доброй ночи! Не спите!';
        backgroundImage = 'https://www.yesasia.ru/wp-content/uploads/2023/12/Jujutsu-Kaisen-Opening-Sequence-700x394.jpeg'; // Ночь
    }

    // Создаем модальное окно
    const modalHtml = `
        <div class="modal fade" id="greetingModal" tabindex="-1" aria-labelledby="greetingModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="background: rgba(0, 0, 0, 0.5); color: white;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="greetingModalLabel">Приветствие</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="background-image: url('${backgroundImage}'); background-size: cover; height: 300px;">
                        <div style="background: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 5px; display: flex; justify-content: center; align-items: center; height: 100%;">
                            <h3>${greetingMessage}</h3>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Добавляем модальное окно в тело документа
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Показываем модальное окно
    const modal = new bootstrap.Modal(document.getElementById('greetingModal'));
    modal.show();
}

// Запускаем функцию при загрузке страницы
window.onload = showGreeting;
