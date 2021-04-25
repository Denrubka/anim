// alert('Добро пожаловать в игру "Виселица". Программа подберет рандомное слово, которое вам нужно будет угадать.');
// // let words  = ['лук', 'помидор', 'огурец', 'банан', 'яблоко', 'апельсин'];
// let words = ["яблоко"];
// let word = words[Math.floor(Math.random(words.length) * words.length)]

// let answerArray = [];
// let remainingLetters = word.length;
// let attempts = 3;
// for(let i = 0; i < word.length; i++) {
//   answerArray.push("_");
// }
// while(remainingLetters > 0 && attempts > 0) {
//   alert(answerArray.join(' ') +  " Вам осталось угадать " + remainingLetters + " буквы. " + "Попыток: " + attempts)
//   let letter = prompt("Введите букву");
//   if(letter === null) {
//     break;
//   } else if(letter.length !== 1) {
//     alert("Пожалуйста, введите только одну букву");
//   } else {
//     for(let j = 0; j < word.length; j++) {
//       if(answerArray[j] == "_") {
//         if(letter == word[j]) {
//         answerArray[j] = letter;
//         remainingLetters--;
//       }
//       }
//     }
//   }
// }






