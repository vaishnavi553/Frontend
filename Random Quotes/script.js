const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs"
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  quoteText.textContent = `"${randomQuote.text}"`;
  quoteAuthor.textContent = `— ${randomQuote.author}`;
});
