const header = document.querySelector("header.header-news");

const carouselItemCount = 4;

fetch("http://localhost:3000/news.json")
  .then((serverResponse) => serverResponse.text())
  .then((responseText) => {
    const data = JSON.parse(responseText);
    populateNewsCarousel(data.articles);
  });

const mainContent = document.querySelector("section.main-content");

appendCalendar(mainContent);

function populateNewsCarousel(news) {
  for (let i = 0; i < carouselItemCount; i++) {
    const newsDiv = createDiv(news[i].title);
    header.appendChild(newsDiv);
  }
}

function createDiv(content) {
  const newDiv = document.createElement("div");
  newDiv.innerText = content;
  return newDiv;
}

function appendCalendar(parent) {
  for (let i = 1; i <= 31; i++) {
    const dayDiv = createDiv(i);
    dayDiv.classList.add("main-content__day");
    parent.appendChild(dayDiv);
  }
}
