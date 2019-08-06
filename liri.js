require("dotenv").config();   

// the variables
var fs = require("fs");                        //  console.log(fs);
var keys = require("./keys.js");                // console.log(keys);
var Spotify = require("spotify-web-api-node");  //console.log(Spotify);
var axios = require("axios");                   // console.log(axios);
var moment = require("moment");                // console.log(moment);

var spotify = new Spotify(keys.spotify);       // console.log(spotify);
var command = process.argv[2];                //  console.log(command);
var arg = process.argv;                        // console.log(arg);
var reference = [];                            // console.log(reference);
var theSong = "";                              // console.log(theSong);
var theMovie = "";                              //console.log(theMovie);
var theBand = "";                               //console.log(theBand);
var filename = "log.txt";                       //console.log(filename);
var fullCommand = [];                           // console.log(command);

// getting reference (user choice) to accept several words

for (var i=3; i < arg.length; i++){
    reference.push(arg[i])
}
var referenceBand = reference.join("");
// End of reference

// loggin full command
fullCommand.push(command);
if(reference.length !=0){
    fullCommand.push(referenceBand);
}

//logging function
function logging(value){
    fs.appendFile(filename,","+ value, function (err){
        if (err){
            return console.log("It's an error")
        }
    })
}
logging(fullCommand);


// commands:
// concert-this, spotify-this-song, movie-this, do-what-it-says

switch (command) {

        case "concert-this":
            concert(referenceBand);
            break;
        case "spotify-this-song":
            spotifySong(command);
            break;
        case "movie-this":
            movie(reference);
            break;
        case "do-what-it-says":
            doThat();
        break;
    };

// concert-this function

function concert(referenceBand){
    var bandUrl = "https://rest.bandsintown.com/artists/" + referenceBand + "/events?app_id=codingbootcamp&limit=5";
    axios.get(bandUrl).then(
        function (response){
            console.log("  ")
            console.log("==== Your Choice Band/Artist Info :  " + referenceBand + " ==== ==== ==== ");
            for(var i = 0; i < response.data.length; i++){
                var datetime = response.data[i].datetime; // saves datetime response into and array

                var dateArr = datetime.split("T"); // splits the date and tie in the response

                var concertResults =
                "==== ==== ==== ====" +
                "\nVenue Name : "+ response.data[i].venue.name +
                "\nVenue Location : "+ response.data[i].venue.city +
                "\nDate of the Event :"+ moment(dateArr[0], "YYYY-DD-MM").format("DD/MM/YYYY");
                // and it changes to a new format
                console.log(concertResults);
            }   console.log("  ");
                console.log("==== ==== ==== ====");
                console.log("  ");

        })
        .catch(function(error){
            console.log("This is the error: " + error);
        });
};
// movie-this Function

function movie(reference){
    if(!reference){
        reference = "mr nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + reference + "&y=&plot=short&tomatoes=true&apikey=trilogy")
    .then(function(response){
        var rotten = response.data.Ratings[1]
        // cosnole.log("this is the rotten value :" + rotten)
        if(rotten === undefined){
            rotten = "Not Available"
        }else{
            rotten = response.data.Ratings[1].value;
        }
        console.log(" ");
        console.log("===== Movie Information ===== " + response.data.Title + "==== ====");
        console.log(" ");
        
        var movieResults =
        "\n Title : " + response.data.Title +
        "\n Year : " + response.data.Year +
        "\n IMDB Rating : " + response.data.Rated +
        "\n Rotten Tomatoes Ratting : " + rotten +
        "\n Country Produced : " + response.data.Country +
        "\n Language : " + response.data.Language +
        "\n Plot : " + response.data.Plot +
        "\n Actors : " + response.data +
        "\n " +
        "\n===========" +
        "\n ";
        console.log(movieResults);

    })
    .catch(function(error){
        console.log("This is the " + error);
    });

}
movie();

// do what it says function
function doThat(){
    fs.readFile("random.txt","utf8", function(error,data){
        if(error){
            return console.log(error);
        }
        var dataArr = data.split(",");
        console.log(" ");
        console.log("--------- menu of content -------");
        console.log(" ")
        for(var i=0; i < dataArr.length; i++){
            if(dataArr[i] === "spotify-this-song"){
                theSong = dataArr[++i];
                console.log("----- spotify song"+ theSong + "-----")
                spotifySong(theSong);

            }else if (dataArr[i] === "movie-this"){
                theMovie= dataArr[++i];
                console.log("------ movie this ----- " + theMovie+"  -------")
                movie(theMovie);
            }else if(dataArr[i] === "concert-this"){
                theBand= dataArr[++i];
                console.log("----- the bands----- " + theBand+ "-----")
                concert(theBand);
            }else{
                console.log("Sorry..., This command is not accepted");
            }
        }
    })
};

// Spotify-this-song function

function spotifySong(reference){
    if(reference.length === 0 ){
        reference = "The Sign";
    }
    spotify.search({type: "track", query: reference})
    .then(function(response){
        console.log(" ");
        console.log("==== Playing Spotify ====" + reference + " ==== ");
        console.log(" ");
        for(var i =0; i < 5; i ++){
            var spotifyResults = "==== ==== ==== ====" +
            "\nArtist(s): " + response.tracks.items[i].artist[0].name +
            "\nSong Name: " + response.tracks.items[i].name +
            "\nAlbum Name: " + response.tracks.items[i].album.name +
            "\nPreview Link: " + response.tracks.items[i].preview_url;

            console.log(spotifyResults);
        }
        console.log(" ");
        console.log("==== ==== ==== ====");
        console.log(" ");
    })
    .catch(function(err){
        console.log(err);
    })
    
};








