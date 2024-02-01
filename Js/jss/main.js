// 1
//let array1 = ['Привет, ', 'мир', '!'];
//console.log(array1.join(''));
// 2
//let array2 = ['Привет, ', 'мир', '!'];
//let text = array2.join('');
//console.log(text);

// 3
//let array3 = ['Привет, ', 'мир', '!'];
//array3[0] = 'Пока, ';
//console.log(array3.join(''));

// 4 
//let obj = {
//	Петя: 50000,
//	Коля: 60000
// };
 
// console.log('Зарплата Пети: ' + obj.Петя);
// console.log('Зарплата Коли: ' + obj.Коля);

//Работа с массивами

//1

//let arr = ['a', 'b', 'c'];
//alert(arr);

//2
//let arr = ['a', 'b', 'c'];
//alert(arr[0]); 
//alert(arr[1]); 
//alert(arr[2]); 


//3
//let arr = ['a', 'b', 'c', 'd'];
//alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]); 

//4

//let arr = [2, 5, 3, 9];
//let result = arr[0] * arr[1] + arr[2] * arr[3];
//alert(result);

//Объекты (ассоциативные массивы)

//1

//var salaries = {Коля: '1000', Вася: '500', Петя: '200'};
//console.log('Зарплата Пети: ' + salaries.Петя);
//console.log('Зарплата Коли: ' + salaries['Коля']);


//2
//var daysOfWeek = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
//var currentDay = new Date().getDay(); 
//console.log('Текущий день недели: ' + daysOfWeek[currentDay]);

//3
//var daysOfWeek = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
//var currentDay = new Date().getDay(); 
//console.log('Текущий день недели: ' + daysOfWeek[currentDay]);

//4
//var day = 3;
//console.log('День недели для значения переменной day: ' + daysOfWeek[day]);

//Многомерные массивы

//1
//let array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//console.log(array[1][0]); 

//2
//let obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
//console.log(obj.js[0]); 

//3
//let weekDays = {
//	'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//	'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//};

//console.log(weekDays.ru[0]); 
//console.log(weekDays.en[2]); 

//4
//let lang = 'ru';
//let day = 3;

//console.log(weekDays[lang][day]); 
