import { Carousel } from "./components/carousel/carousel.js";

const carousel = new Carousel();

fetch("http://localhost:3000/news.json")
  .then((serverResponse) => serverResponse.text())
  .then((responseText) => {
    const data = JSON.parse(responseText);
    carousel.populateNewsCarousel(data.articles);
  });
