## LIRI BOT NODE APP
#### LIRI is a Language Interpretation and Recognition Interface.
------

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives data in return.

-------

## Challenge
Use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in commands through Language vs Speech using the following commands:

`concert-this`

`spotify-this-song`

`movie-this`

`do-what-it-says`

-------
## Tech
GitHub - file repository

Visual Studio Code - text editor

Node.js

--------
## APIs:

* Spotify (https://developer.spotify.com/)
* OMDB (http://www.omdbapi.com)
* Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)

-------
## NPM Packages:
 * Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
 * Axios (https://www.npmjs.com/package/axios)
 * Moment (https://www.npmjs.com/package/moment)
 * DotEnv (https://www.npmjs.com/package/dotenv)
 
 ------
### Prerequisites
 * Node.js - download the latest version of Node (https://nodejs.org/en/).

 * Make a new GitHub repository called liri-node-app and clone it to your computer.

 * Send requests using the axios package to the Bands in Town, Spotify and OMDB APIs.
 
-----
## What Each Command Does
  LIRI searches Bands in Town for concerts, Spotify for songs, and OMDB for movies.

 1) `node liri.js concert-this '<artist/band name here>'`

Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

 * Name of the venue

 * Venue location

 * Date of the Event (using the format "MM/DD/YYYY")
 
------
2) `node liri.js spotify-this-song '<song name here>'`

Displays the following information about the selected song in your terminal/bash window

 * Artist(s)

 * The song's name

 * A preview link of the song from Spotify

 * The album containing the song

 * If no song is provided, the program defaults to "The Sign" by Ace of Base.
 
------
3) `node liri.js movie-this '<movie name here>'`

This will output the following movie information to your terminal/bash window:

 ```
  * Title
  * Year movie was released
  * IMDB Rating
  * Rotten Tomatoes Rating
  * Country where movie was produced
  * Language(s)
  * Plot of the movie
  * Actors in the movie
  ```
  
 ------ 
##### If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'
4) `node liri.js do-what-it-says`

 * Runs spotify-this-song for "I Want it That Way".

### Demonstration 

##### `"Mr. Nobody"` is a default movie, as per instructions given we should have a movie info display even when we dont pass any name in the command line.

![default-movie](https://user-images.githubusercontent.com/50170893/62665823-a3e82b00-b94e-11e9-9eed-c8380a1b6556.PNG)

##### When you enter `concert-this` `name of the concert` the app shows the list of events.
![concert-this](https://user-images.githubusercontent.com/50170893/62665512-8bc3dc00-b94d-11e9-971e-b853c47a455a.PNG)

##### For `doThat` method, we had instruction to set some default values in `random.txt` for each.

![random](https://user-images.githubusercontent.com/50170893/62665756-62f01680-b94e-11e9-9ab7-465f598b6401.PNG)

##### The response we get front the terminal after you enter `do-what-it-says`
I have set some `Default Values` for all the commands so you can see it in the `Menu of Content` and complete results as well. 

![do-what-it-says-1](https://user-images.githubusercontent.com/50170893/62665615-fd9c2580-b94d-11e9-9db1-8d4386edd628.PNG)

![do-what-it-says-2](https://user-images.githubusercontent.com/50170893/62665627-0987e780-b94e-11e9-875a-4319e0b86197.PNG)


##### This is the response from `movie-this` `name of the movie` below you can see the result of command passed.
![movie-this](https://user-images.githubusercontent.com/50170893/62665522-941c1700-b94d-11e9-8063-de456373f132.PNG)







