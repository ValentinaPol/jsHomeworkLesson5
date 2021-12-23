//1. 1.	Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
//Регулярные выражения (кто умеет) не использовать.
//Спросить у пользователя строку. Вывести в консоль количество русских             гласных букв в ней.

function sumVowel (str){
    str = prompt ("Введите строку", "");
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'а' || str[i] === 'у' || str[i] === 'о' || str[i] === 'ы' || str[i] === 'и' || str[i] === 'э' || str[i] === 'я' || str[i] === 'ю' || str[i] === 'ё' || str[i] === 'е'){
            sum += 1;;
        }
    }
    return `Сумма русских гласных: ${sum}`;
}

console.log (sumVowel());



// 2.	У вас есть два массива. Один показывает имена людей, а другой показывает их род занятий. Ваша задача - создать объект, отображающий каждого человека по его роду занятий.
var names = ["Max", "Vera", "Joe", "Annette", "Sussan"]
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

//combineNameWork (names, jobs) ➞ {
//Max: "Butcher",
//Vera: "Programmer",
//Joe: "Doctor",
//Annette: "Teacher",
//Sussan: "Lecturer"
//}

//Два массива имеют одинаковую длину.
//Индекс имени в массиве имен совпадает с индексом работы человека в массиве вакансий, как показано в таблице выше.

function combineNameWork(arrNames, arrJobs){
    var objResult = {};
    arrNames.forEach(function(key, index) {
        objResult[key] = arrJobs[index];
    });
    return objResult;
}

console.log(combineNameWork(names, jobs));



//3. 	У вас есть входной массив (из строк с двумя буквами) и массив слов
//Напишите функцию, которая возвращает true, если каждую (строку с двумя           буквами) из первого массива можно найти хотя бы один раз в массиве                          слов(втором массиве).
//canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
//canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
//# "cu" не найден ни в одном из слов.
//canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
//canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false


function canFind(arr1, arr2){
    var found;
    for (let el of arr1) {
        var elFound = false;
        for (let el2 of arr2) {
          if (el2.indexOf(el) != -1) {
              elFound = true;
              break;
          }
        }
        found = elFound;
        if(!found) break;
    }
    return found;
}



console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));


        







 
