interface IElement {
	className?: string;
	[name: string] : any;
}
let salaries: IElement = {
	"Вася" : 100,
	"Петя" : 300,
	"Даша" : 250
};
// СУММА СВОЙТСВ
let sumProp: number = 0;
for (let i in salaries){
	sumProp += salaries[i];
}
// Вывод результата
console.log("Всего: " + sumProp);
// МАКСИМАЛЬНАЯ ЗАРПЛАТА
let maxSalary: number = 0;
let nameEmpl: string = " ";
for (let i in salaries){
	if (maxSalary < salaries[i]){
		maxSalary = salaries[i];
		nameEmpl= i;
	}
}
// Вывод результата в консоль
if (name != " ")
	console.log(`Самая высокая зарплата у сотрудника ${nameEmpl}`);
else
	console.log("Нет сотрудников.");
// ФУНКЦИЯ countBy
function countBy(step: number, length: number): number[]{
	// Проверка параметра 
	if (length <= 0){
		console.log("Некорректная размерность массива.");
		return null;
	}
	let array: number[] = new Array(length);
	let value = step;
	for (let i = 0; i < length; i++){
		array[i] = value;
		value += step;
	}
	return array;
}
let rezult: number[] = countBy(1, 10);
let rezult1: number[] = countBy(2, 5);
console.log("countBy(1, 10) = [" + rezult.join(", ") + " ]");
console.log("countBy(2, 5) = [" + rezult1.join(", ") + " ]");

//ДОБАВИТЬ КЛАСС В СТРОКУ
let obj: IElement = {className: 'open menu'}; 
function addClass(obj: IElement, cls: string): IElement{
	let str1: String = new String(obj.className);
	let splitted: string[] = str1.split(" ");
	let count: number = 0;
	for (let word of splitted){
		let countLetters: number = 0
		if (word.length == cls.length)
			for (let i = 0; i < cls.length; i++)
				if (word[i] == cls[i])
					countLetters++;
				else
					break;
		if(countLetters == cls.length){
			console.log(`Слово ${cls} уже есть в списке`);
			return obj;
		}// end if		
	} // end for	
	let temp: string = obj.className.concat(" " + cls);	
	obj.className = temp;
	return obj;
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj.className);
