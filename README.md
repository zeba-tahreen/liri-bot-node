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
##### This is the default movie we set `"Mr. Nobody"`.

![defaultValue](https://user-images.githubusercontent.com/50170893/62527178-a80a3080-b808-11e9-83cc-78b7cd68e05c.PNG)

##### When you enter `concert-this` `name of the concert` the app shows the list of events.
![concertThis](https://user-images.githubusercontent.com/50170893/62527134-958ff700-b808-11e9-8aa7-282c18633619.PNG)

##### For `doThat` method I have set some default values in `random.txt` for each.

![dothat1](https://user-images.githubusercontent.com/50170893/62527234-bc4e2d80-b808-11e9-99a2-8568493c7e8d.PNG)

##### The response we get front the terminal after you enter `do-what-it-says`
![dothat](https://user-images.githubusercontent.com/50170893/62527197-b2c4c580-b808-11e9-9562-2ae600f73a37.PNG)

##### This is the response from `movie-this` `name of the movie`.
![movieThis](https://user-images.githubusercontent.com/50170893/62527253-c5d79580-b808-11e9-9645-f2824ed1ee91.PNG)








