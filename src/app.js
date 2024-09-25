/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function generateRandomCard(arr) {
    let randomCard = Math.floor(Math.random() * arr.length);
    return arr[randomCard];
  }

  // Arrays de los palos y números de las cartas
  const cardIcons = ["♦", "♥", "♠", "♣"];
  const cardNumbers = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "King",
    "Queen",
    "Jack",
    "Ace"
  ];

  // Elementos del DOM para actualizar con la carta generada
  const iconTop = document.querySelector(".icon-top");
  const iconBottom = document.querySelector(".icon-bottom");
  const number = document.querySelector(".number");
  const btn = document.querySelector(".btn");

  // Evento para generar una nueva carta cuando se presione el botón
  btn.addEventListener("click", () => {
    // Generar icono y número aleatorios
    const randomIcon = generateRandomCard(cardIcons);
    const randomNumber = generateRandomCard(cardNumbers);

    // Asignar valores a los elementos de la carta
    iconTop.innerHTML = randomIcon;
    iconBottom.innerHTML = randomIcon;
    number.innerHTML = randomNumber;

    // Limpiar clases de palos previas y asignar la nueva clase
    const card = document.querySelector(".card");
    card.classList.remove("heart", "diamond", "spade", "club");

    if (randomIcon === "♥" || randomIcon === "♦") {
      card.classList.add(randomIcon === "♥" ? "heart" : "diamond");
    } else {
      card.classList.add(randomIcon === "♠" ? "spade" : "club");
    }
  });

  // Opcional: Generar una carta inicial cuando se carga la página
  btn.click();
};
