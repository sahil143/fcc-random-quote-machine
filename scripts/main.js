var colors = ['#D50000','#D32F2F','#6A1B9A','#C51162','#673AB7','#3F51B5','#2196F3','#009688','#4CAF50','#CDDC39','#8BC34A','#3E2723','#FF9800','#FFC107','#263238','#795548','#BF360C','#F57F17','#006064','#004D40'];
var showQuote,authorQuote ;


$(document).ready(function(){
    $("#new_quote").click(function(){
        $.ajax({
           headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function(result){
                var quote = JSON.parse(result);
                showQuote = quote.quote;
                authorQuote = quote.author;
                
            }
        });
        $("#quote").html("<h2>"+showQuote +"</h2>");
        $("#author").html("<h3>"+authorQuote +"</h3>");
       var color = Math.floor(Math.random() * colors.length);
        $("#card").css("background",colors[color]);
        $("#new_quote").css("color",colors[color]);
       
    });
    
    
});