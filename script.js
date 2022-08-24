let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuotel = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById('main-title').innerHTML = "Dom's Page";

  // Part 2
  document.querySelector('body')
    .style.backgroundColor = 'green';
    'green'

  // Part 3
  var domList = document.getElementById("favorite-things");
  var list = domList.getElementsByTagName("li")[5];
  domList.removeChild(list);

  // Part 4
  document.getElementById("special-title").style.fontSize = '2rem';

  // Part 5
  var domRace = document.getElementById("past-races");
  var race = document.getElementsByTagName("li")[8];
  domRace.removeChild(race);
 
  // Part 6
  var newCity = document.createElement("li");
  var city = document.getElementById("past-races").getElementsByTagName("li")[2];
  city.appendChild(newCity);
  newCity.innerHTML = "San Francisco";

  // Part 7
  var newBlog = document.createElement("div");
  var blog = document.getElementsByClassName("main").getElementsByTagName("div");
  blog.classList.add("blog-post purple");
  var log = document.createElement("h1");
  var og = document.createElement("p");
  blog.appendChild("newBlog");
  newBlog.appendChild("log");
  newBlog.appendChild("og");
  log.innerHTML = 'San Francisco';
  og.innerHTML = 'FOR FAMILY';

  // Part 8
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  document.querySelector("quote-title").addEventListener("click", randomQuote);

  // Part 9
  const mouseOut = document.getElementsByClassName("blog-post purple");
  const mouseEnter = document.getElementsByClassName("blog-post purple");
  mouseOut.toggleAttribute("purple");
  mouseEnter.toggleAttribute("red");



});
