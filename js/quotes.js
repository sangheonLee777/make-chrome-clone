const quotes = [{
    quote: "asdf",
    author: "이상헌",
  },
  {
    quote: "qwer ",
    author: "이상헌",
  },
  {
    quote: "zxcv ",
    author: "이상헌",
  },
  {
    quote: "123",
    author: "이상헌",
  },
  {
    quote: "456",
    author: "이상헌",
  },
  {
    quote: "6789",
    author: "이상헌",
  },
  {
    quote: "0000",
    author: "이상헌",
  },
  {
    quote: "ㅁㅁㅁㅁ",
    author: "이상헌",
  },
  {
    quote: "ㅇㅇㅇㅇ",
    author: "이상헌",
  },
  {
    quote: "ㅏㅏㅏㅏ",
    author: "이상헌",
  },









];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * 10)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;