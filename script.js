let top_three_players = document.querySelectorAll(".top_three_players");
let second_three_players = document.querySelectorAll(".second_three_players");
let backArrow = document.querySelector(".back_arrow");
let nextArrow = document.querySelector(".next_arrow");
let countInArrow = document.querySelector(".arrow_count");
let allMenCardsContainer = document.querySelector(
  ".tournament_participants__cards"
);
let allMenCards = document.querySelectorAll(
  ".tournament_participants__cards__card"
);
let one_card = document.querySelector(".one_card");
let two_card = document.querySelector(".two_card");
let three_card = document.querySelector(".three_card");
let four_card = document.querySelector(".four_card");
let five_card = document.querySelector(".five_card");
let six_card = document.querySelector(".six_card");
let seven_card = document.querySelector(".seven_card");

if (window.matchMedia("(max-width: 720px)").matches) {
  let fourCardContent = four_card.cloneNode(true);
  let sixCardContent = six_card.cloneNode(true);
  four_card.innerHTML = two_card.innerHTML;
  six_card.innerHTML = three_card.innerHTML;
  two_card.innerHTML = fourCardContent.innerHTML;
  three_card.innerHTML = sixCardContent.innerHTML;
}

backArrow.addEventListener("click", () => {
  backArrow.classList.add("disabled");
  nextArrow.classList.remove("disabled");

  top_three_players.forEach((el) => {
    el.classList.toggle("invisible");
  });
  second_three_players.forEach((el) => {
    el.classList.toggle("invisible");
  });
  countInArrow.innerText = "3";
});

nextArrow.addEventListener("click", () => {
  nextArrow.classList.add("disabled");
  backArrow.classList.remove("disabled");
  top_three_players.forEach((el) => {
    el.classList.toggle("invisible");
  });
  second_three_players.forEach((el) => {
    el.classList.toggle("invisible");
  });
  countInArrow.innerText = "6";
});

second_three_players.forEach((el) => {
  el.classList.add("invisible");
});

if (window.screen.width > 540) {
  let cards_visible = setInterval(() => {
    top_three_players.forEach((el) => {
      el.classList.toggle("invisible");
      countInArrow.innerText = "3";
      backArrow.classList.add("disabled");
      nextArrow.classList.remove("disabled");
    });
    second_three_players.forEach((el) => {
      el.classList.toggle("invisible");

      if (!el.classList.contains("invisible")) {
        countInArrow.innerText = "6";
        backArrow.classList.remove("disabled");
        nextArrow.classList.add("disabled");
      }
    });
  }, 4000);
}


if (window.screen.width <= 540) {
  let mibileContainer = document.querySelector(".main_ataps__alustration");
  let main_ataps__alustration_disp_none = document.querySelectorAll(
    ".main_ataps__alustration_disp_none"
  );

  main_ataps__alustration_disp_none.forEach((element) => {
    element.classList.add("none");
  });

  document
    .querySelector(".tournament_participants__titleAndNav__nav")
    .classList.add("invisible");

  for (let index = 0; index < allMenCards.length; index++) {
    if (index > 0) {
      allMenCards[index].classList.add("invisible");
    }
  }

  allMenCardsContainer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="mobile_cards_nav ">

  <span class="levo light">
  <svg class="nav_arrows " width="44.000000" height="44.000000" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

      <defs/>
      <circle  id="Ellipse 64" cx="22.000000" cy="22.000000" r="22.000000" fill="#313131" fill-opacity="1.000000"/>
      <path id="Vector 92" d="M24.5382 30.4614L16.0767 21.9999L24.5382 13.5383" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="square"/>
  </svg>
</span>

  <p class="max_cont"><span class="max">1</span>/6</p>

  <span class="pravo light">
  <svg class="nav_arrows " width="44.000000" height="44.000000" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

      <defs/>
      <circle  id="Ellipse 64" cx="22.000000" cy="22.000000" r="22.000000" fill="#313131" fill-opacity="1.000000"/>
      <path id="Vector 92" d="M19.4618 13.5383L27.9233 21.9999L19.4618 30.4614" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="square"/>
  </svg>
</span>
</div>
  `
  );

  mibileContainer.innerHTML = `
<div class="mobile_container">
<div class="mobile_cards">
    <div class="mb_card mb_card_one ">
        <div class="mb_card_item ">

            <svg class="qq" width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="1"
                    d="M12.9 25L12.9 22.52L16.1 22.52L16.1 14.04L12.9 16.32L12.9 13.4L16.28 11L19.1 11L19.1 22.52L21.7 22.52L21.7 25L12.9 25Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>

            <p class="alustration_card__text">Строительство <br>железнодорожной <br>магистрали
                Москва-Васюки</p>
        </div>
        <div class="mb_card_item">
            <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="2"
                    d="M12.6 25L12.6 22.82L17.5 18.6C18.1133 18.0533 18.6 17.6067 18.96 17.26C19.3333 16.9 19.6 16.56 19.76 16.24C19.92 15.92 20 15.5733 20 15.2C20 14.6267 19.84 14.1667 19.52 13.82C19.2133 13.46 18.74 13.28 18.1 13.28C17.3667 13.28 16.8 13.48 16.4 13.88C16 14.2667 15.8 14.9333 15.8 15.88L12.8 15.88C12.8 14.8267 13 13.92 13.4 13.16C13.8 12.3867 14.3933 11.7933 15.18 11.38C15.98 10.9667 16.9533 10.76 18.1 10.76C19.1667 10.76 20.0667 10.9533 20.8 11.34C21.5333 11.7133 22.08 12.2333 22.44 12.9C22.8133 13.5667 23 14.3333 23 15.2C23 15.84 22.8467 16.44 22.54 17C22.2467 17.56 21.8533 18.0933 21.36 18.6C20.8667 19.1067 20.3133 19.6133 19.7 20.12L16.82 22.52L23.2 22.52L23.2 25L12.6 25Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <p class="alustration_card__text ">Открытие фешенебельной <br>гостиницы «Проходная <br>пешка»
                и других
                <br>небоскрёбов
            </p>
        </div>
    </div>
    <div class="mb_card mb_card_two mb_card_hiden">
        <div class="mb_card_item ">
            <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="3"
                    d="M17.9 25.24C16.7667 25.24 15.8133 25.06 15.04 24.7C14.2667 24.3267 13.68 23.8 13.28 23.12C12.8933 22.44 12.7 21.6333 12.7 20.7L15.7 20.7C15.7 21.38 15.8733 21.8867 16.22 22.22C16.5667 22.5533 17.1267 22.72 17.9 22.72C18.6333 22.72 19.18 22.56 19.54 22.24C19.9133 21.9067 20.1 21.44 20.1 20.84C20.1 20.2133 19.9133 19.74 19.54 19.42C19.18 19.1 18.6333 18.94 17.9 18.94L16.58 18.94L16.58 16.66L17.9 16.66C18.54 16.66 19.0333 16.5267 19.38 16.26C19.7267 15.98 19.9 15.5533 19.9 14.98C19.9 14.4867 19.7333 14.08 19.4 13.76C19.0667 13.44 18.5667 13.28 17.9 13.28C17.22 13.28 16.7133 13.4333 16.38 13.74C16.06 14.0467 15.9 14.5 15.9 15.1L12.9 15.1C12.9 14.18 13.08 13.4 13.44 12.76C13.8133 12.1067 14.3733 11.6133 15.12 11.28C15.8667 10.9333 16.7933 10.76 17.9 10.76C19.0067 10.76 19.9333 10.9267 20.68 11.26C21.4267 11.5933 21.98 12.0467 22.34 12.62C22.7133 13.1933 22.9 13.84 22.9 14.56C22.9 15.3467 22.68 16.0133 22.24 16.56C21.8133 17.0933 21.24 17.4733 20.52 17.7C21.3467 17.9267 21.98 18.3267 22.42 18.9C22.8733 19.46 23.1 20.1933 23.1 21.1C23.1 21.9 22.8867 22.6133 22.46 23.24C22.0467 23.8533 21.4533 24.34 20.68 24.7C19.9067 25.06 18.98 25.24 17.9 25.24Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <p class="alustration_card__text ">Поднятие сельского <br> хозяйства в радиусе <br>на тысячу
                километров:
                <br>производство овощей, <br>фруктов, икры, шоколадных <br>конфет
            </p>
        </div>
    </div>
    <div class="mb_card mb_card_three mb_card_hiden">
        <div class="mb_card_item"><svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="4"
                    d="M19 25L19 22.04L12.4 22.04L12.4 19.96L19 11L22 11L22 19.56L23.58 19.56L23.58 22.04L22 22.04L22 25L19 25ZM15.2 19.56L19 19.56L19 14.34L15.2 19.56Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <p class="alustration_card__text ">Строительство дворца <br>для турнира</p>
        </div>

        <div class="mb_card_item">
            <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="5"
                    d="M18 25.24C17.12 25.24 16.3667 25.1267 15.74 24.9C15.1133 24.6733 14.6 24.3667 14.2 23.98C13.8 23.5933 13.5 23.1533 13.3 22.66C13.1133 22.1667 13.0133 21.6467 13 21.1L16 21.1C16.04 21.58 16.22 21.9733 16.54 22.28C16.8733 22.5733 17.36 22.72 18 22.72C18.7333 22.72 19.28 22.5133 19.64 22.1C20.0133 21.6867 20.2 21.0667 20.2 20.24C20.2 19.6533 20.1 19.1867 19.9 18.84C19.7 18.48 19.4333 18.2267 19.1 18.08C18.7667 17.92 18.4 17.84 18 17.84C17.5333 17.84 17.1467 17.9267 16.84 18.1C16.5333 18.26 16.2867 18.4867 16.1 18.78L13.3 18.78L13.3 11L22.42 11L22.42 13.48L16.3 13.48L16.3 16.04C16.58 15.7867 16.92 15.6067 17.32 15.5C17.72 15.3933 18.18 15.34 18.7 15.34C19.6067 15.34 20.3933 15.52 21.06 15.88C21.7267 16.24 22.2467 16.7867 22.62 17.52C23.0067 18.24 23.2 19.1467 23.2 20.24C23.2 21.24 22.98 22.12 22.54 22.88C22.1133 23.6267 21.5133 24.2067 20.74 24.62C19.9667 25.0333 19.0533 25.24 18 25.24Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <p class="alustration_card__text ">Размещение гаражей <br>для гостевого <br>автотранспорта</p>
        </div>
    </div>
    <div class="mb_card mb_card_four mb_card_hiden">
        <div class="mb_card_item"><svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="6"
                    d="M18.5 25.24C16.7533 25.24 15.4 24.72 14.44 23.68C13.48 22.6267 13 20.9333 13 18.6L13 18.2C13 16.4133 13.24 14.98 13.72 13.9C14.2133 12.8067 14.8867 12.0133 15.74 11.52C16.6067 11.0133 17.5933 10.76 18.7 10.76C19.5667 10.76 20.32 10.88 20.96 11.12C21.6133 11.36 22.14 11.74 22.54 12.26C22.94 12.7667 23.1933 13.44 23.3 14.28L20.5 14.28C20.3667 13.9467 20.14 13.7 19.82 13.54C19.5133 13.3667 19.1067 13.28 18.6 13.28C18.0667 13.28 17.6 13.3933 17.2 13.62C16.8133 13.8333 16.4933 14.2267 16.24 14.8C16 15.3733 15.8533 16.2133 15.8 17.32C16.1467 16.7733 16.6333 16.3933 17.26 16.18C17.9 15.9667 18.5467 15.86 19.2 15.86C20.1467 15.86 20.94 16.0333 21.58 16.38C22.2333 16.7267 22.7333 17.2267 23.08 17.88C23.4267 18.5333 23.6 19.3267 23.6 20.26L23.6 20.48C23.6 21.4267 23.38 22.26 22.94 22.98C22.5133 23.6867 21.9133 24.24 21.14 24.64C20.3667 25.04 19.4867 25.24 18.5 25.24ZM18.3 22.72C19.02 22.72 19.58 22.52 19.98 22.12C20.3933 21.7067 20.6 21.18 20.6 20.54L20.6 20.34C20.6 19.7 20.3933 19.18 19.98 18.78C19.58 18.38 19.02 18.18 18.3 18.18C17.58 18.18 17.0133 18.38 16.6 18.78C16.2 19.18 16 19.7 16 20.34L16 20.54C16 21.18 16.2 21.7067 16.6 22.12C17.0133 22.52 17.58 22.72 18.3 22.72Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <p class="alustration_card__text ">Постройка сверхмощной <br>радиостанции для передачи
                <br>всему миру сенсационных <br>результатов
            </p>
        </div>
    </div>
    <div class="mb_card mb_card_five mb_card_hiden">
        <div class="mb_card_item">
            <svg width="36.000000" height="36.000000" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc>
                    Created with Pixso.
                </desc>
                <defs />
                <rect id="number" rx="18.000000" width="36.000000" height="36.000000" fill="#FFFFFF"
                    fill-opacity="1.000000" />
                <path id="7" d="M14.42 25L19.14 13.48L12.4 13.48L12.4 11L22.18 11L22.18 13.18L17.6 25L14.42 25Z"
                    fill="#313131" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
            <p class="alustration_card__text ">Создание аэропорта «Большие Васюки» <br>с регулярным отправлением
                почтовых <br>самолётов и дирижаблей во все концы <br>света, включая Лос-Анжелос и Мельбурн</p>
        </div>
    </div>
</div>


<div class="mobile_cards_nav">
    <div class="nav_arrow_left ">
    
    <svg class="nav_arrows light" width="36.000000" height="36.000000" viewBox="0 0 44 44" fill="none"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <desc>

    </desc>
    <defs />
    <circle id="Ellipse 64" cx="22.000000" cy="22.000000" r="22.000000" fill="#313131"
        fill-opacity="1.000000" />
    <path id="Vector 92" d="M24.5382 30.4614L16.0767 21.9999L24.5382 13.5383" stroke="#FFFFFF"
        stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="square" />
</svg>
        
    </div>
    <div class="mobile_cards_nav_progress">
        <svg class="progress_svg progress_bg" width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 67" cx="5.000000" cy="5.000000" r="5.000000" fill="#D9D9D9"
                fill-opacity="1.000000" />
        </svg>
        <svg class="progress_svg" width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 67" cx="5.000000" cy="5.000000" r="5.000000" fill="#D9D9D9"
                fill-opacity="1.000000" />
        </svg>
        <svg class="progress_svg" width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 67" cx="5.000000" cy="5.000000" r="5.000000" fill="#D9D9D9"
                fill-opacity="1.000000" />
        </svg>
        <svg class="progress_svg" width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 67" cx="5.000000" cy="5.000000" r="5.000000" fill="#D9D9D9"
                fill-opacity="1.000000" />
        </svg>
        <svg class="progress_svg" width="10.000000" height="10.000000" viewBox="0 0 10 10" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 67" cx="5.000000" cy="5.000000" r="5.000000" fill="#D9D9D9"
                fill-opacity="1.000000" />
        </svg>

    </div>
    <div class="nav_arrow_right">
        <svg class="nav_arrows light" width="36.000000" height="36.000000" viewBox="0 0 44 44" fill="none"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>
                Created with Pixso.
            </desc>
            <defs />
            <circle id="Ellipse 64" cx="22.000000" cy="22.000000" r="22.000000" fill="#313131"
                fill-opacity="1.000000" />
            <path id="Vector 92" d="M19.4618 13.5383L27.9233 21.9999L19.4618 30.4614" stroke="#FFFFFF"
                stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="square" />
        </svg>
    </div>
    <div class="mobile_plane "><img src="img/plane.png" alt="plane"></div>
</div>
</div>`;

  let nav_arrow_left = document.querySelector(".nav_arrow_left");
  let nav_arrow_right = document.querySelector(".nav_arrow_right");
  let all_cards = document.querySelectorAll(".mb_card");
  let progress = document.querySelectorAll(".progress_svg");
  let levo = document.querySelector(".levo");
  let pravo = document.querySelector(".pravo");
  let max = document.querySelector(".max");
  let index = 0;
  let menIndex = 0;

  levo.classList.add("disabled");
  levo.addEventListener("click", () => {
    allMenCards[menIndex].classList.add("invisible");
    if (menIndex === 0) {
      menIndex = 0;
    } else {
      menIndex--;
        max.textContent = menIndex + 1
    }

    if (menIndex === 0) {
      levo.classList.add("disabled");
    } else levo.classList.remove("disabled");

    if (menIndex === allMenCards.length - 1) {
      pravo.classList.add("disabled");
    } else pravo.classList.remove("disabled");

    allMenCards[menIndex].classList.remove("invisible");
  });

  pravo.addEventListener("click", () => {
    allMenCards[menIndex].classList.add("invisible");
    if (menIndex === allMenCards.length - 1) {
      menIndex = allMenCards.length - 1;
    } else {
        menIndex++
        max.textContent = menIndex +1;
    }

    if (menIndex === 0) {
      levo.classList.add("disabled");
    } else levo.classList.remove("disabled");

    if (menIndex === allMenCards.length - 1) {
      pravo.classList.add("disabled");
    } else pravo.classList.remove("disabled");


    allMenCards[menIndex].classList.remove("invisible");
  });

  nav_arrow_right.addEventListener("click", () => {
    all_cards[index].classList.add("mb_card_hiden");
    progress[index].classList.remove("progress_bg");

    if (index === all_cards.length - 1) {
      index = all_cards.length - 1;
    } else index++;

    if (index === 0) {
      nav_arrow_left.classList.add("disabled");
    } else nav_arrow_left.classList.remove("disabled");

    if (index === all_cards.length - 1) {
      nav_arrow_right.classList.add("disabled");
    } else nav_arrow_right.classList.remove("disabled");

    all_cards[index].classList.remove("mb_card_hiden");
    progress[index].classList.add("progress_bg");
  });

  nav_arrow_left.addEventListener("click", () => {
    all_cards[index].classList.add("mb_card_hiden");
    progress[index].classList.remove("progress_bg");

    if (index === 0) {
      index = 0;
      nav_arrow_left.classList.add("disabled");
      nav_arrow_right.classList.remove("disabled");
    } else index--;

    if (index === 0) {
      nav_arrow_left.classList.add("disabled");
    } else nav_arrow_left.classList.remove("disabled");

    if (index === all_cards.length - 1) {
      nav_arrow_right.classList.add("disabled");
    } else nav_arrow_right.classList.remove("disabled");

    all_cards[index].classList.remove("mb_card_hiden");
    progress[index].classList.add("progress_bg");
  });
}
