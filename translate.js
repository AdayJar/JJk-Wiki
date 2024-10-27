const translations = {
    en: {
        title: "Welcome to Tokyo Magic Technical College!",
        description: "Welcome to Jujutsu Kaisen Wiki! Our site contains a lot of interesting information about 'Magic Battle', including information about the plot, characters, history of creation, as well as the latest news about releases. We are glad to see you here and hope that your journey through our site will be exciting and informative. Join us to learn everything about the world of magic and curses!",
        history: "History",
        characters: "Characters",
        latestNews: "Latest News",
        plot: "Plot",
        creator: "Creator",
        releaseDate: "Release Date",
        topCharacters: "Top Characters",
        story: "In a world where curses and evil spirits coexist with humans, young student <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Yuji Itadori</a> accidentally consumes a powerful cursed object — <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Sukuna's</a> fingers. After this, his life changes forever. Now he possesses immense magical power and is forced to join the world of sorcery to fight curses and other evil entities. Yuji enrolls in the magic school, where he learns to fight curses and protect people from evil spirits. He joins a team of other sorcerers, including the experienced and strict teacher <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Satoru Gojo</a> and his classmates — <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Nobara Kugisaki</a> and <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Megumi Fushiguro</a>. Together, they face various dangers, explore the world of curses, and strive to find and destroy the remaining Sukuna fingers to prevent his return.",
        // добавьте остальные переводы
    },
    ru: {
        title: "Добро пожаловать в Токийский колледж магии!",
        description: "Добро пожаловать на вики Jujutsu Kaisen! Наш сайт содержит много интересной информации о 'Магической битве', включая информацию о сюжете, персонажах, истории создания, а также последние новости о релизах. Мы рады видеть вас здесь и надеемся, что ваше путешествие по нашему сайту будет увлекательным и информативным. Присоединяйтесь к нам, чтобы узнать все о мире магии и проклятий!",
        history: "История",
        characters: "Персонажи",
        latestNews: "Последние новости",
        plot: "Сюжет",
        creator: "Создатель",
        releaseDate: "Дата выпуска",
        topCharacters: "Топ персонажи",
        story: "В мире, где проклятия и злые духи сосуществуют с людьми, молодой студент <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Юдзи Итадори</a> случайно съедает мощный проклятый артефакт — <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">пальцы Суккуны</a>. После этого его жизнь меняется навсегда. Теперь он обладает огромной магической силой и вынужден присоединиться к миру колдовства, чтобы бороться с проклятиями и другими злыми сущностями. Юдзи поступает в магическую школу, где он учится бороться с проклятиями и защищать людей от злых духов. Он присоединяется к команде других колдунов, включая опытного и строгого учителя <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Сатору Годжо</a> и своих одноклассников — <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Нобару Кугисаки</a> и <a class=\"link\" href=\"file:///C:/Users/user/Desktop/web%20in%20university/JJK2.html#characters\" style=\"text-decoration: none;\">Мегуми Фушигуро</a>. Вместе они сталкиваются с различными опасностями, исследуют мир проклятий и стремятся найти и уничтожить оставшиеся пальцы Суккуны, чтобы предотвратить его возвращение.",
        // добавьте остальные переводы
    }
};

function translatePage(language) {
    // Перевод заголовков и описаний
    document.querySelector("h3.h3").innerText = translations[language].title;
    document.querySelector("h4").innerText = translations[language].description;
    document.querySelector("section h3:nth-of-type(1)").innerText = translations[language].history;
    document.querySelector("section h3:nth-of-type(2)").innerText = translations[language].characters;
    document.querySelector("section h3:nth-of-type(3)").innerText = translations[language].latestNews;
    document.querySelector("section h3:nth-of-type(4)").innerText = translations[language].plot;
    document.querySelector("section h3:nth-of-type(5)").innerText = translations[language].creator;
    document.querySelector("section h3:nth-of-type(6)").innerText = translations[language].releaseDate;
    document.querySelector("section h3:nth-of-type(7)").innerText = translations[language].topCharacters;
    
    // Перевод истории
    document.querySelector("section .story").innerHTML = translations[language].story;

    // Обновите другие элементы текста на странице, если это необходимо
}

document.getElementById("language-selector").addEventListener("change", function () {
    const selectedLanguage = this.value;
    translatePage(selectedLanguage);
});
