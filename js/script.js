'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), // берем элемент из родителя wrapper
      oneHeart = document.querySelector('.heart');

//p.s для поиска определенных свойств в консоли разработчика сочитание клавиш ctrl + f

/* box.style.backgroundColor = 'blue';*/ 
// меняем цвет бокса, обращаемся к style
/* box.style.width = '500px'; */ 
// меняем ширину бокса, обращаемся к style
// inline стили измененные в js, всегда перебивают те что в css

box.style.cssText = 'background-color: blue; width: 500px'
// второй вариант изменения css свойств в формате cssText


btns[1].style.borderRadius = '100%'; // меняем радиус круга, обращаемся к style

circles[0].style.backgroundColor = 'red'; // при обращении к массивам, коллекциям нескольких элементов всегда указываем определенный индекс

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
}); // метод forEach перебирает для каждого элемента, свойство bgc - blue

const div = document.createElement('div');
// createElement - создает блок div в js
// const text = document.createTextNode('Тут был я');

/* div.classList.add('black');
document.querySelector('.wrapper').append(div); */
// добавляем блок div к определенному классу через свойства querySelector(.)

div.classList.add('black');

/* wrapper.append(div); */
// метод append добавляет блок div к концу тега body 

wrapper.appendChild(div);
// метод appendChild добавляет блок div к концу тега body, более старый вариант

/* wrapper.prepend(div); */
// метод prepend добавляет блок div к началу тега body 

/* hearts[0].before(div); */
// метод .before добавляет div элемент к началу класса hearts

/* hearts[0].after(div); */
// метод .before добавляет div элемент после первого элемента в hearts

/* wrapper.insertBefore(div, hearts[1]); */
// insertBefore - вставить до, () первым помещаем элемент для вставки, в данном случае блок div, а после элемент перед которым мы вставляем блок div

/* circles[0].remove(); */
// метод .remove удаляет элемент по индексу

/* wrapper.removeChild(hearts[1]); */
// метод .removeChild удаляет элемент через родителя, добавляя класс, а затем индекс

/* hearts[0].replaceWith(circles[0]); */
// метод .replaceWith заменяет элемент по индексу, другим элементом по индексу

/* wrapper.replaceChild(circles[0], hearts[0]); */
// метод .replaceChild заменяет элемент через родителя

/* div.innerHTML = "Hello World"; */
// помещаем текст в блок div
// innerHTML — это свойство, которое используется для получения или изменения HTML-содержимого элемента. Оно работает как с текстом, так и с HTML-разметкой

div.innerHTML = "<h1>Hello World</h1>"; 
// можно так же присваивать абсолютно любые теги из HTML

/* div.textContent = "Hello"; */
// свойство textContent работает только с текстом

/* div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); */
// Метод insertAdjacentHTML используется для добавления HTML-кода непосредственно перед или после элемента, не перезаписывая его содержимое
// добавляем HTML - код непосредственно до начала блока div

/* div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); */
// добавляем HTML - код непосредственно перед блоком div

/* div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); */
// добавляем HTML - код непосредственно перед концом блока div

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
// добавляем HTML - код непосредственно после блока div