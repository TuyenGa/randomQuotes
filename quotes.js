$(document).ready(function () {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    getQuotes();
    var quoteContent ;
    var quoteAuth;
    function getQuotes(){
        $.getJSON(url,function (data) {
            quoteContent = data.quoteText;
            quoteAuth = data.quoteAuthor;
            $(".quote").html('" '+data.quoteText+' "');
            if(data.quoteAuthor === '')
            {
                quoteAuth = "UnKnow";
                $(".author").html("- UnKnow");
            }
            else
            $(".author").html(' - '+data.quoteAuthor);

            $("#tweet").on("click",function () {
                window.open("https://twitter.com/intent/tweet?text="+'"'+quoteContent+'"' + " - "+quoteAuth);
            })
        })
    }
    $("#getQuotes").on('click',function () {
        getQuotes();
    })
});