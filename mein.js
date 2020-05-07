//alert("hallo!");
/*var words = ["программа", "макака", "прекрасный", "оладушек"];
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    for (var i = 0; i < word.length; i++) { answerArray[i] = "_"; }
    var remainingLetters = word.length;
    while (remainingLetters > 0) { // Основной код 
        // Показываем состояние игры 
        // Запрашиваем вариант ответа 
        // Обновляем answerArray и remainingLetters для каждого 
        // вхождения угаданной буквы 
    }
    alert(answerArray.join(" "));
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) { break;
    } else if (guess.length !== 1) { alert("Пожалуйста, введите только одну букву."); } else {
        // Обновляем состояние игры 
    }
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }

    }