/*jslint browser: true*/
/*global $, jQuery*/
function load() {
    'use strict';
    var $body = $('body');
    var $filhea = $('#anime-header');
    var $filmres = $('#anime-results');
    
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
            $filmres.append('<li class="res">'+'<h2>'+animeres.title+'</h2>'+
                           '<p>'+animeres.description+'</p>');
        };
        }
       
        
    });
}

//
$('#form-con').submit(load);