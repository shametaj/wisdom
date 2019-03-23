  var tweetURL = "";
  var tempList = "";
  var randomQuote = "";
  var html = "";
  var quoteBody = document.querySelector("#quote-body");
  var quote = document.querySelector("#quote");
  var button = document.querySelector("#quote-btn");
  var share = document.querySelector("#share");
  
  
  // Object with quotes & authors
  var quotes = [
   { 
    text: "Design is not for philosophy it's for life.",
    author: "- Issey Miyake -"
   },
   {
    text: "You cannot have a positive life and a negative mind.",
    author: "- Joyce Meyer -"
   },
   { 
    text: "The true sign of intelligence is not knowledge, but imagination." ,
    author: "- Albert Enstein -"
   },
   { 
    text: "Do what you can, with what you have, where you are.", 
    author: "- Theodore Roosevelt -"
   },
   { 
    text: "The journey of a thousand miles begins with one step.", 
    author: "- Lao Tzu -"
   },
   { 
    text: "Don't cry because it's over. Smile because it happened.", 
    author: "- Dr.Seuss -"
   },
   { 
    text: "Be so good they can’t ignore you.", 
    author: "- Steve Martin -"
   },
   { 
    text: "It always seems impossible until its done." ,
    author: "- Nelson Mandela -"
   },
   { 
    text: "Don’t count the days make the days count.", 
    author: "- Muhammad Ali -"
   },
   { 
    text: "Everything you can imagine is real.", 
    author: "- Pablo Picasso -"
   },
   { 
    text: "All the power is within you. You can do anything. ", 
    author: "- Swami Vivekananda -"
   },
   { 
    text: "I wasn’t there to compete. I was there to win.", 
    author: "- Arnold Schwarzenegger -"
   },
   { 
    text: "Never bend your head. Hold it high. Look the world straight in the eye.", 
    author: "- Helen Keller -"
   },
   { 
    text: "What you want exists. Don’t settle until you get it.", 
    author: "- Jay Shetty -"
   },
   { 
    text: "If you can dream it, you can do it.", 
    author: "- Walt Disney -"
   },
   { 
    text: "Success is walking from failure to failure with no loss of enthusiasm.", 
    author: "- Winston Churchill -"
   },
   { 
    text: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma.", 
    author: "- Steve Jobs -"
   },
   { 
    text: "If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward. ", 
    author: "- Martin Luther King Jr -"
   },
   { 
    text: "Be happy for this moment. This moment is your life. ", 
    author: "- Omar Khayyam -"
   },
   { 
    text: "In three words I can sum up everything I’ve learned about life: It goes on.", 
    author: "- Robert Frost  -"
   },
   { 
    text: "You only live once, but if you do it right, once is enough.", 
    author: "- Mae West -"
   },
   { 
    text: "The mind is everything. What you think you become. ", 
    author: "- Buddha -"
   },
   { 
    text: "If you want to live a happy life, tie it to a goal, not to people or things.", 
    author: "- Albert Einstein -"
   },
   { 
    text: "Life isn’t about finding yourself. Life is about creating yourself.", 
    author: "- George Bernard Shaw -"
   },
   { 
    text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", 
    author: "- Mark Twain -"
   },
   { 
    text: "When the power of love overcomes the love of power the world will know peace.", 
    author: "- Jimi Hendrix -"
   },
   { 
    text: "Love isn’t finding a perfect person. It’s seeing an imperfect person perfectly.", 
    author: "- Sam Keen -"
   },
   { 
    text: "All you need is love. ", 
    author: "- Paul McCartney -"
   },
   { 
    text: "He who lives in harmony with himself lives in harmony with the universe.", 
    author: "- Marcus Aurelius -"
   },
   { 
    text: "If you want to be happy, be.", 
    author: "- Leo Tolstoy -"
   },
   { 
    text: "Happiness is when what you think, what you say, and what you do are in harmony.", 
    author: "- Mahatma Gandhi -"
   },
   { 
    text: "The most important thing is to enjoy your life – to be happy – it’s all that matters. ", 
    author: "- Audrey Hepburn -"
   },
   ]
  
  
  // Shuffle the quotes  
  function randomize(){
    tempList = Object.keys(quotes);
    randomQuote = tempList[ Math.floor(Math.random() * tempList.length)];
    console.dir(randomize);
  }
  
  // Load a quote on the page
  function loadQuote(){
    randomize();
    
    // Create an element to load a quote
    html = '<p id="quote"><q>' + 
            quotes[randomQuote].text + 
            '</q><span class="quote-author">' + 
            quotes[randomQuote].author + '</span></p>';
    
    // Create Tweeter URL to share a quote
    tweetURL = "https://twitter.com/intent/tweet?text=" + 
               '"' +  quotes[randomQuote].text +
               '" ' + quotes[randomQuote].author +
               ' %23wisdom ' + '%23quotes ' + '%23inspiration ';
    
    // Display element with a quote on the page
    quoteBody.innerHTML = html;
   
  }
  loadQuote();  
    
  // Load a new random quote on click
  button.onclick = function(){
     loadQuote();
  }

  // Open Twitter window
  share.onclick = function(){
    window.open(tweetURL);
  }