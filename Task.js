var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
// СУММА СВОЙТСВ
var sumProp = 0;
for (var i in salaries) {
    sumProp += salaries[i];
}
// Вывод результата
console.log("Всего: " + sumProp);
// МАКСИМАЛЬНАЯ ЗАРПЛАТА
var maxSalary = 0;
var nameEmpl = " ";
for (var i in salaries) {
    if (maxSalary < salaries[i]) {
        maxSalary = salaries[i];
        nameEmpl = i;
    }
}
// Вывод результата в консоль
if (name != " ")
    console.log("\u0421\u0430\u043C\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 " + nameEmpl);
else
    console.log("Нет сотрудников.");
// ФУНКЦИЯ countBy
function countBy(step, length) {
    // Проверка параметра 
    if (length <= 0) {
        console.log("Некорректная размерность массива.");
        return null;
    }
    var array = new Array(length);
    var value = step;
    for (var i = 0; i < length; i++) {
        array[i] = value;
        value += step;
    }
    return array;
}
var rezult = countBy(1, 10);
var rezult1 = countBy(2, 5);
console.log("countBy(1, 10) = [" + rezult.join(", ") + " ]");
console.log("countBy(2, 5) = [" + rezult1.join(", ") + " ]");
//ДОБАВИТЬ КЛАСС В СТРОКУ
var obj = { className: 'open menu' };
function addClass(obj, cls) {
    var str1 = new String(obj.className);
    var splitted = str1.split(" ");
    var count = 0;
    for (var _i = 0, splitted_1 = splitted; _i < splitted_1.length; _i++) {
        var word = splitted_1[_i];
        var countLetters = 0;
        if (word.length == cls.length)
            for (var i = 0; i < cls.length; i++)
                if (word[i] == cls[i])
                    countLetters++;
                else
                    break;
        if (countLetters == cls.length) {
            console.log("\u0421\u043B\u043E\u0432\u043E " + cls + " \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043A\u0435");
            return obj;
        } // end if		
    } // end for	
    var temp = obj.className.concat(" " + cls);
    obj.className = temp;
    return obj;
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj.className);
