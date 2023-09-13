var wordsEnglish = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she"
];

var wordsFrench = [
  "le",
  "de",
  "un",
  "à",
  "être",
  "et",
  "en",
  "avoir",
  "que",
  "pour",
  "dans",
  "ce",
  "il",
  "qui",
  "ne",
  "sur",
  "se",
  "pas",
  "plus",
  "par",
  "avec",
  "tout",
  "on"
];

(function() {
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "fill") {
      prefillForm(message.language);
    }
  });
  function prefillForm(language) {
    var words = (language === "French") ? wordsFrench : wordsEnglish;
    var guessButton = document.getElementById('pedantix-guess-btn');
    
    if (guessButton === null) {
      guessButton = document.getElementById('pedantle-guess-btn');
    }
    
    function clickGuessButton() {
      guessButton.click();
    }
    
    function fillFormAndClickButton(word) {
      var form = document.getElementById('pedantix-guess');
      if (form === null) {
        form = document.getElementById('pedantle-guess');
      }
      form.value = word;
      
      console.log('Clicking...');
      clickGuessButton();
    }
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      console.log(word);
      setTimeout(function(word) {
        return function() {
          fillFormAndClickButton(word);
        };
      }(word), i * 1000); // Delay increases with each iteration
    }
  }})();
