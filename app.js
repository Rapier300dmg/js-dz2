function chooseDrink() {
    let timeOfDay = document.getElementById("timeOfDay").value;

    if (typeof timeOfDay === "string" && timeOfDay.trim() !== "") {
        timeOfDay = timeOfDay.toLowerCase().trim();

        if (timeOfDay === "утро") {
            alert("Предлагаем кофе!");
        } else if (timeOfDay === "день") {
            alert("Предлагаем чай!");
        } else if (timeOfDay === "вечер") {
            alert("Предлагаем горячий шоколад!");
        } else {
            alert("Ошибка: Некорректное время суток. Пожалуйста, введите 'утро', 'день' или 'вечер'.");
        }
    } else {
        alert("Ошибка: Вы ввели пустую строку или некорректные данные.");
    }
}

function fillUserData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let subject = document.getElementById("subject").value;
    let grade = document.getElementById("grade").value;

    let user = {
        name: name,
        age: parseInt(age),
        subject: subject,
        grade: grade
    };

    console.log();
    console.log(user);

    user.age += 5;

    console.log();
    console.log(user);
}

const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

function displayMovieInfo() {
    document.getElementById("directorSecondFilm").textContent = movies[1].director;

    document.getElementById("genreFourthFilm").textContent = movies[3].genre;
}

displayMovieInfo();

function modifyShoppingList() {
    let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
   
    shoppingList.unshift("апельсины");
    console.log(shoppingList);

    shoppingList.pop();
    console.log(shoppingList);

    shoppingList.splice(2, 1, "кефир", "масло");
    console.log(shoppingList);

    const shoppingListElement = document.getElementById("shoppingList");
    shoppingListElement.innerHTML = shoppingList.map(item => `<li>${item}</li>`).join('');
}
