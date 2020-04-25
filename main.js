const quotes = [
    {
        name: "Marcus Aurelius",
        quote: "Waste no more time arguing what a good man should be. Be One."
    },
    {
        name: "Marcus Aurelius",
        quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own."
    },
    {
        name: "Marcus Aurelius",
        quote: "If it is not right, do not do it, if it is not true, do not say it."
    },
    {
        name: "Marcus Aurelius",
        quote: "The best revenge is not to be like your enemy."
    },
    {
        name: "Marcus Aurelius",
        quote: "Be tolerant with others and strict with yourself."
    },
    {
        name: "Seneca",
        quote: "If a man knows not which port he sails, no wind is favorable."
    },
    {
        name: "Seneca",
        quote: "He who fears death will never do anything worth of a man who is alive."
    },
    {
        name: "Epictetus",
        quote: "How long are you going to wait before you demand the best for yourself?”"
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);



function displayQuote () {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

