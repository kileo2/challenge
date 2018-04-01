/*jslint browser: true*/
/*global $, jQuery*/
function loadData() {
    'use strict';
    var $body = $('body');
    var $animehea = $('#anime-header');
    var $anires = $('#anime-results');
    
    var searchval = $('#anime').val();
    
 //url for api   
    var animemurl = 'https://api.jikan.me/search/anime/'+searchval+'/';
 
    // get JSON data from api and append results to the results container
    $.getJSON(animemurl, function (data) {
        console.log(data);
        
        //getting response for GET and saving it as an object
        var animeresults=data.responseJSON;
        if(animeresults != null){
        //appending results from response.    
        for (var i = 0; i < animeresults.length;i++){
            var animeres = animeresults[i];
            $anires.append('<li class="res">'+'<h2>'+animeres.title+'</h2>'+
                           '<p>'+animeres.description+'</p>'+'</li>');
        };
        }
       
        
    });
}

//
$('#form-container').submit(loadData);