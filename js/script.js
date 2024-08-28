const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Пвх первый сорт",
    price: "170",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 1,
    title: "Пвх второй сорт",
    price: "171",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 2,
    title: "Пвх третий сорт",
    price: "172",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 3,
    title: "Пвх четвертый сорт",
    price: "173",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 4,
    title: "Пвх пятый сорт",
    price: "174",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 5,
    title: "Пвх шестой сорт",
    price: "175",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 6,
    title: "Пвх седьмой сорт",
    price: "176",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 7,
    title: "Пвх восьмой сорт",
    price: "177",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
  {
    id: 8,
    title: "Пвх девятый сорт",
    price: "178",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <a 
          href="./single.html" 
          class="content-main__list-item card">
          <div class="card__img">
            <img
              class="card-img"
              src="${item.img}"
              alt="${item.title}"
            />
          </div>

          <div class="card__info">
            <h3 class="card__title">${item.title}</h3>
            <p class="card__price">${item.price}&nbsp;₽</p>
            <p class="card__address">${item.address}</p>
            <p class="card__date">${item.date}</p>
          </div>
        </a>
  `
    );
  });
};

const filterArray = (array, value) => {
   return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filterArray(cardArray, searchInput.value));
});
