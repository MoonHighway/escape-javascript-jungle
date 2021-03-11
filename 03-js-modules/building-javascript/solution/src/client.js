import { startSearch, create5Day } from "./lib.js";

const iSearch = document.createElement("input");
const btnSearch = document.createElement("button");
const temp = document.createElement("div");
const sky = document.createElement("div");
const outlookGraph = document.createElement("canvas");

document.body.appendChild(iSearch);
document.body.appendChild(btnSearch);
document.body.appendChild(temp);
document.body.appendChild(sky);
document.body.appendChild(outlookGraph);

iSearch.value = "Tahoe City, CA";
btnSearch.innerText = "Get Current Weather";
btnSearch.onclick = async () => {
  const result = await startSearch(iSearch.value);

  temp.innerHTML = `${result.current.temperature}&deg;`;
  sky.innerText = result.current.skytext;

  create5Day(result, outlookGraph);
};
