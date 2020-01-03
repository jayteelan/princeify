/* --------- API VARIABLES --------- */
const searchSong = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${titleParsed}&q_artist=${artistParsed}&page_size=5&apikey=${apiKey}`;
const getLyrics = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackID}&apikey=${apiKey}`;
const apiKey = "dc5c9b28a701d08bdfc60ec825c88602";

/* --------- QUERYSELECTORS --------- */
const inputTitle = document.querySelector("#title");
const inputArtist = document.querySelector("#artist");

const about = document.querySelector(".about");

const searchResults = document.querySelector(".search-results");
const resultsList = document.querySelector(".results-list");

const lyricsDiv = document.querySelector(".lyrics-div");
const resSong = document.querySelector(".res-song");
const resArtist = document.querySelector(".res-artist");
const resLyrics = document.querySelector(".res-lyrics");

/* --------- PARSE INPUT FOR SEARCH ---------*/
const parseString = input => {
  const words = input.value.split(" ");
  return words.reduce((a, b) => {
    `${a}+${b}`;
  });
};

/*  --------- HOW PRINCE WRITES ---------
// with thanks to PrinceVault.com

I > 👁️
of > "☮️"
heart > ♥
money > $
you > U
you're > U're
you'll > U'll
you'd > U'd
see > C
are > R
aren't > R'nt
why > Y
to > 2
too > 2
tonight > 2 night
tomorrow > 2morrow
for > 4
fore > 4
be > B
bee > B
before > B4
into > in2
unto > un2
know > no
with > wit
ex* > X* (e.g., Xpectation)
pussy > P.
flower > flow3r
Minneapolis > Moneyapolis
artificial > art official
hit and run > hitnrun
let it go > letitgo

prince > (symbol)
one > 1
two > 2
three > 3
four > 4
five > 5
six > 6
seven > 7
eight > 8
nine > 9
zero > 0 
*/
