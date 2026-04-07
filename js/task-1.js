const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const item = document.querySelector(".item");
const itemList = document.querySelectorAll(".item ul");
const itemListLength = itemList.forEach((item) => {
  console.log(`Category: ${item.previousElementSibling.textContent}`);
  console.log(`Elements: ${item.children.length}`);
});

// ===========================================
// Завдання 1
// ===========================================
// HTML містить список категорій ul#categories

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// 1.	Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.	Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// На що буде звертати увагу ментор при перевірці:
// •	Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// •	Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// -------------------------------------------------
// •	У консолі має бути виведено наступне повідомлення:
// -------------------------------------------------
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5
