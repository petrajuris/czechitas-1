import { NewsArticle } from "../news-article/news-article.js";

export class Carousel {
  constructor() {
    this.header = document.querySelector(
      "header.header-news > div.header-news__container"
    );
    this.carouselItemCount = 2;
    this.carouselItemStart = 0;
    this.articles;

    this.buttonLeft = document.querySelector("#carousel-button-left");
    this.buttonRight = document.querySelector("#carousel-button-right");
    this.buttonLeft.addEventListener("click", () => {
      this.carouselItemStart--;
      this.populateNewsCarousel(this.articles);
    });

    this.buttonRight.addEventListener("click", () => {
      this.carouselItemStart++;
      this.populateNewsCarousel(this.articles);
    });
  }

  populateNewsCarousel(articleData) {
    this.articles = articleData;
    this.header.innerText = "";
    for (
      let i = this.carouselItemStart;
      i < this.carouselItemStart + this.carouselItemCount;
      i++
    ) {
      const newsValue = this.articles[i];
      const newsArticle = new NewsArticle();
      const newsDiv = newsArticle.createDivForNews(newsValue);
      this.header.appendChild(newsDiv);
    }
    this.checkButtonsVisibility();
  }

  checkButtonsVisibility() {
    this.buttonLeft.hidden = this.carouselItemStart <= 0;

    this.buttonRight.hidden =
      this.carouselItemStart >= this.articles.length - this.carouselItemCount;
  }
}
