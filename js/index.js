;
window.alert("Оповещение из js-файла в рабочее окно");
console.log("Оповещение из js-файла в  в консоль");

setTimeout(function () {
    console.log("Сообщение через 8 сек");
}, 8000);

const p_3_child_0 = document.querySelectorAll('p')[3].children[0]
p_3_child_0.style = "font-weight: bold; font-size: 4.5rem; color: brown; background-color: aquamarine;   word-spacing: 3rem; letter-spacing: 3.0rem;"


if (window.confirm("Изменить стиль на новый?")) {
    p_3_child_0.style = "font-weight: bold; font-size: 4.5rem; color: red; background-color: aquamarine;   word-spacing: 3rem; letter-spacing: 3.0rem;"
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function new_color() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    p_3_child_0.style.color = rndCol;
}


p_3_child_0.addEventListener("mouseup", new_color, false)
