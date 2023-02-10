import axios from "axios";

const Tabs = (topics) => {
  const topicsElement = document.createElement("div");
  topicsElement.classList.add("topics");

  topics.forEach((item) => {
    let topicsItem = document.createElement("div");
    topicsItem.classList.add("tab");
    topicsItem.textContent = `${item}`;
    topicsElement.appendChild(topicsItem);
    console.log(topicsItem);
  });

  return topicsElement;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
};

// axios.get("http://localhost:5001/api/topics").then((res) => {

//   console.log(res);
// });

const tabsAppender = (selector) => {
  axios.get("http://localhost:5001/api/topics").then((res) => {
    const dataTopics = Tabs(res.data.topics);
    const selectorElement = document.querySelector(selector);
    selectorElement.appendChild(dataTopics);
    console.log(res);
  });
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender };
