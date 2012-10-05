jQuery(function($) {
  var quote = quotes[Math.floor(Math.random() * quotes.length)]
  $('#js-quote-text').text(quote.text)
  $('#js-quote-author').text(quote.author)
  $('#js-quote-company').text(quote.company)
});

// jQWidon't v0.1:
// http://davecardwell.co.uk/javascript/jquery/plugins/jquery-widont/
// Modified to include <p> elements
new function(){function c(){$("h1,h2,h3,h4,h5,h6,p").widont()}function d(a){return a.replace(b.regexp,"&nbsp;$1")}var a={auto:function(a){return a!=undefined?b.auto=a:b.auto},init:function(){return b.init()},transform:function(a){return b.widont(a)}};$.jqwidont=a;var b={auto:true,init:c,widont:d,regexp:new RegExp("[\\n\\r\\s]+"+"("+"[^\\n\\r\\s(?:&#160;)]+"+"[\\n\\r\\s]*"+")$","m")};$(document).ready(function(){if(b.auto)c()});$.fn.widont=function(){return $(this).each(function(){var a=$(this);a.html(b.widont(a.html()))})};}
