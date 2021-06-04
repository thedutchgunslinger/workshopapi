const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')


document.addEventListener("DOMContentLoaded", function() {


    //var searchURL = "http://www.omdbapi.com/?apikey=e9ab112b&t=Love";
    var apiURL = "http://www.omdbapi.com/?apikey=";
    var key = "f93f43d3";
    var search = "&i=";
    var searchWord = id;
    var searchURL = apiURL + key + search + searchWord;

    
    
    function addValue(id, value) {
        document.getElementById(id).innerHTML = value;
    }

    // Maakt gebruik van http://www.omdbapi.com/
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", searchURL, true);
    xhr.onload = function (e) 
    {
        if (xhr.readyState === 4) 
        {
            if (xhr.status === 200) 
            {
                

                var response = JSON.parse(xhr.responseText);
               

                  
                    
                    addValue("Title", response.Title);
                    addValue("Type", response.Type);
                    addValue("Year", response.Year);
                    addValue("Rating", response.Rated);
                    addValue("Released", response.Released);
                    addValue("BoxOffice", response.BoxOffice);
                    addValue("Production", response.Production);
                    addValue("Duration", response.Runtime);
                    addValue("Genre", response.Genre);
                    addValue("Director", response.Director);
                    addValue("Writer", response.Writer);
                    addValue("Actors", response.Actors);
                    addValue("Plot", response.Plot);
                    addValue("Awards", response.Awards);
                    addValue("Language", response.Language);
                    addValue("Metascore", response.Metascore);
                    addValue("imdbRating", response.imdbRating);
                    addValue("Poster", '<img src="' + response.Poster + '">');

                    
                    }

            } 
            else 
            {
                console.error(xhr.statusText);
            }
        }
 
    xhr.onerror = function (e) 
    {
        console.error(xhr.statusText);
    };
    xhr.send(null);
});

