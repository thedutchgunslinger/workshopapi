
document.addEventListener("DOMContentLoaded", function() {
    var moviesElement = document.getElementById("movies");

    //var searchURL = "http://www.omdbapi.com/?apikey=e9ab112b&t=Love";
    var apiURL = "http://www.omdbapi.com/?apikey=";
    var key = "f93f43d3";
    var search = "&s=";
    var searchWord = document.getElementById("search").value;
    var searchURL = apiURL + key + search + searchWord;
    

    // Maakt gebruik van http://www.omdbapi.com/
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", searchURL, true);
    xhr.onload = function (e) 
    {
        if (xhr.readyState === 4) 
        {
            if (xhr.status === 200) 
            {
                /*var response = JSON.parse(xhr.responseText);
                console.log(response);
                console.log(response.Title);
                console.log(response.Actors);

                var li = document.createElement("li");
                li.innerHTML = response.Title;
                moviesElement.appendChild(li);*/

                var response = JSON.parse(xhr.responseText);
                console.log(response.Search.length);

                  for (var i = 0; i < response.Search.length; i++) {
                    var id = response.Search[i].imdbID;
                    var poster = response.Search[i].Poster;
                    var title = response.Search[i].Title;
                    var year = response.Search[i].Year;
                    var badge = document.createElement('div');
                    badge.className = 'badge';
                    badge.innerHTML =
                    '<div class="card" style="width: 18rem;">' + 
                    '<img src="' + poster + '" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title text-break">' + title + '</h5>' +
                        '<h6 class="card-subtitle mb-2 text-muted">' + year + '</h6>' +
                        '<a href="details.html?id=' + id + '" class="btn btn-primary stretched-link">Read More</a>'
                    '</div>'

                    


                    //I gave the div the same ID's as the keys in the object for ease
                    document.getElementById("data").appendChild(badge);
                    }

            } 
            else 
            {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) 
    {
        console.error(xhr.statusText);
    };
    xhr.send(null);
});

