document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('feedbackForm').onsubmit = function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let feedback = document.getElementById('feedback').value;
        let rating = document.getElementById('rating').value;


        let characterNames = ['Yuji', 'Megumi', 'Nobara', 'Gojo', 'Sukuna','Inumaki','Maki','Toji','Mahito','Jogo','Hanami','Yuta'];

    
        if (name.trim() === '') {
            alert('Поле "Name" обязательно для заполнения.');
            return false;
        }


        if (/\d/.test(name)) {
            alert('Имя не должно содержать цифр.');
            return false;
        }

        if (feedback.trim() === '') {
            alert('Поле "Feedback" обязательно для заполнения.');
            return false;
        }

        let containsCharacterName = characterNames.some(character => feedback.includes(character));

        if (!containsCharacterName) {
            alert('Отзыв должен содержать хотя бы одно имя персонажа (например, Yuji, Megumi, Nobara, Gojo, Sukuna, Inumaki, Maki, Toji, Mahito, Jogo, Hanami, Yuta).');
            return false;
        }

        if (rating === 'Select a rating') {
            alert('Выберите рейтинг.');
            return false;
        }


        alert('Форма отправлена успешно!');
        return true;
    };
});
