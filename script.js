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
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.getElementById('main-title');
  mainTitle.textContent = "Welcome to Dom T's Homepage"

  // Part 2
  const body = document.querySelector("body");
  body.style.backgroundColor = "purple";

  // Part 3
  const listItems = document.getElementById('favorite-things').children
  listItems[(listItems.length) - 1].remove();

  // Part 4
  const specials = document.querySelectorAll('div.special-title');
  for (const special of specials) {
    special.style.fontSize = '2rem';
  };

  // Part 5
  const pastRaceUl = document.getElementById('past-races')
  const pastRaces = document.getElementById('past-races').children
  pastRaces[3].remove();

  // Part 6
  const li = document.createElement('li');
  li.textContent = "Boston";
  pastRaceUl.appendChild(li);

  // Part 7
  // Create a new blog post
  const main = document.querySelector(".main")
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post', 'purple'); 
  // You can adjust the classes as needed
  // Create an h1 element for the title
  const h1 = document.createElement('h1');
  h1.textContent = 'Boston'; // Set the title text
  // Create a p element for the content
  const p = document.createElement('p');
  p.textContent = 'I DROVE THROUGH FANIUEL HALL!'; 
  // Set the content text
  // Append the elements to the new blog post
  newBlogPost.appendChild(h1);
  newBlogPost.appendChild(p);
  // Append the new blog post to the main div
  main.appendChild(newBlogPost);
  // Part 8
  const quoteTitle = document.getElementById("quote-title");
  quoteTitle.addEventListener('click', randomQuote);
  // Part 9
  const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach(blogPost => {
    blogPost.addEventListener('mouseout', () => {
      blogPost.classList.toggle("purple");
    });
    blogPost.addEventListener("mouseenter", () => {
      blogPost.classList.toggle("red");
    });
  });

});