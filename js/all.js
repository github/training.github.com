jQuery(function($) {
  var quote = quotes[Math.floor(Math.random() * quotes.length)]
  $('#js-quote-text').text(quote.text)
  $('#js-quote-author').text(quote.author)
  $('#js-quote-company').text(quote.company)
});