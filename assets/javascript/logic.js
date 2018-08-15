//-----------------------------eventful--------------------

// var city
// var artist
// function eventful() {
//     var eventfulURL = "http://api.eventful.com/json/events/search?app_key=BMHGt9rHhxJ8frMs&location="+city+"&keywords="+artist

//     $.ajax ({
//         url: eventfulURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response)
//         // for (e = 0; e < response.events.event.length; e++) {
//         //     console.log(response.events.event[e].title)
//         //     console.log(response.events.event[e].venue_address)
//         //     console.log(response.events.event[e].start_time)
//         // }
//     })
// }


//---------------------------bandsintown---------------------------


var city = $("#city").val()
var artistNoSpace = artist.replace(" ", "%20")
function bandsintown() {
    var bandsURL = "rest.bandsintown.com/artists/"+artistNoSpace+"/events?app_id="

    $.ajax ({
        url: bandsURL,
        method: "GET"
    }).then(function(response) {
        for (s=0; s<response.length; s++) {
            var town = response.venue.city;
            if (town ==city) {
                console.log(response[s].venue.name);
                console.log(response[s].datetime);
            }
        }
    })
}

// ---------------------



for (a= 0; a < similarArtists.length; a++) {
    artistNoSpace = similarAartists[a].replace(" ", "%20");
    bandsintown(); //or eventful()
}