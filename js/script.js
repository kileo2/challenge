/*eslint browser: true*/
/*global $, jQuery*/
'use strict';
function loadData(search) {
//   var $animElem = $('#anime-results');
//    
//    $animElem.text("")
    // get JSON data from api and append results to the results container
    $.getJSON('https://api.jikan.me/search/anime/'+search+'/', function (data) {
        
        //getting response for GET and saving it as an object
        var animeResults=data.responseJSON;
        if(animeResults != null){
        //appending results from response.    
        for (var i = 0; i < animeResults.length;i++){
            let animeRes = animeResults[i];
            //append data to HTML
            document.getElementById("anime-results").appendChild('<li class="animeRes">'+'<h2>'+animeRes.title+'</h2>'+
                           '<p>'+animeRes.description+'</p>'+'</li>');
        }
        }
       
        
    });
}

//passing in the search value
$("#submit-btn").click(function(){
    var searchVal = $("#anime").val();
    loadData(searchVal);
})