//
// Fetch is available in the window, but needs to be loaded for node
//

try {
  fetch = window.fetch;
} catch (error) {
  var fetch = require("node-fetch");
}

const parseJSON = (res) => res.json();
const pluckResults = (data) => data.results;
const usaOnly = (data) =>
  data.filter(({ location }) => location.country === "United States");
const trimUserData = (data) =>
  data.map((user) => ({
    name: user.name,
    email: user.email,
    location: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
  }));
const toString = (data) => JSON.stringify(data, null, 2);

//
// Thenables are a form of composition
//

fetch("https://randomuser.me/api/?results=100")
  .then(parseJSON)
  .then(pluckResults)
  .then(usaOnly)
  .then(trimUserData)
  .then(toString)
  .then(console.log);
