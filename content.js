browser.pageAction.onClicked.addListener(function() {
  var w="dokimi";
  document.getElementById('pedantix-guess').value = w;
  document.getElementById('pedantix-guess-btn').click();
  console.log('asdfasodj')
});