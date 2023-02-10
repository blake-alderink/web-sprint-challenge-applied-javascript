import axios from "axios";

const Card = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgSource = document.createElement("img");
  const authorName = document.createElement("span");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(imgSource);

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  imgSource.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  return card;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  axios.get("http://localhost:5001/api/articles").then((res) => {
    console.log(res);
    let javacriptArray = res.data.articles.javascript;
    let technologyArray = res.data.articles.technology;
    let jqueryArray = res.data.articles.jquery;
    let bootstrapArray = res.data.articles.bootstrap;
    let nodeArray = res.data.articles.node;
    let allArray = [
      javacriptArray,
      technologyArray,
      jqueryArray,
      bootstrapArray,
      nodeArray,
    ];

    allArray.forEach((item) => {
      item.forEach((innerItem) => {
        const newArticle = Card(innerItem);
        const parentElement = document.querySelector(selector);
        parentElement.appendChild(newArticle);
      });
    });
  });
  // axios.get('http://localhost:5001/api/articles')
  // .then(res => {
  //   console.log(res);
  // })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
