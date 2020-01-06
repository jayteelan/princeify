/* ----- MUSIXMATCH API ----- */
const apiKey = "dc5c9b28a701d08bdfc60ec825c88602";
const apiURL = "https://api.musixmatch.com/ws/1.1/";

/* ----- REPLACEMENTS ----- */
const pifyBasic = {
  // Object.keys = original words; Object.values = Princified substitutions
  I: "👁️",
  you: "U",
  are: "R",
  to: "2",
  too: "2",
  for: "4",
  be: "B",
  know: "no"
};

/* ----- GET LYRICS ----- */
let resLyrics = "";
let lines = [];
let linesMutate = [];
let mutateLyrics = "";

function getFormData(e) {
  e.preventDefault();
  let inputTitle = document.querySelector("#title").value;
  let inputArtist = document.querySelector("#artist").value;
  inputTitle = inputTitle.replace(" ", "+");
  inputArtist = inputArtist.replace(" ", "+");
  const getData = async () => {
    try {
      const res = await axios.get(
        `${apiURL}matcher.lyrics.get?q_track=${inputTitle}&q_artist=${inputArtist}&apikey=${apiKey}`
      );
      console.log("result", res);
      let lyricsFound = res.data.message.body.lyrics.lyrics_body;
      let lyricsCopyright = res.data.message.body.lyrics.lyrics_copyright;
      resLyrics = `${lyricsFound}\n\n${lyricsCopyright}`;
      // split lyrics
      lines = resLyrics.split("\n");
      console.log("lines", lines);
      // mutate
      lines.forEach = line => {
        const mutate = line.replace(/you/gi, "U");
        console.log(mutate);
        // linesMutate.push(mutate);
      };
      console.log("mutate", linesMutate);
    } catch {
      console.error("something went wrong");
    }
  };
  getData();
}

const form = document.querySelector("form");
form.addEventListener("submit", getFormData);

/* ----- SPLIT LYRICS BY LINE ----- */

/* ----- MUTATE LYRICS ----- */

const pifyLyrics = ""; // create an empty string for Princeified lyrics

/*
const pifyIt = lyrics => {
  // iterate over original lyrics, replacing each instance of a keyword with its Princeified value
  // with help from W3Schools (https://w3schools.com/jsref/jsref_replace.asp)
  for (i = 0; i < pifyBasic.length; ++i) {
    if (lyrics.includes(Object.keys(pifyBasic)[i])) {
      lyrics.replace(
        / Object.keys(pifyBasic)[i] /gi,
        ` ${Object.values(pifyBasic)[i]} `
      );
    }
  }
};

// wait for getFormData to populate resLyrics, try{pifyIt(resLyrics)}

/* ----- APPEND TO DOM ----- */

// qs".res-song" = pifyIt(song title)
// qs .res-artist = `by Prince feat. ${original artist}`
// qs ".res-lyrics" = pifyLyrics
// lyrics-div.classList.remove("hidden")

/* ----- WRONG SONG ----- */

// .wrongSong.addEventListener("click", // reveal seach results div)

// API fetch track.search q_track, q_title, f_has_lyrics=1, page_size=10

// for loop: createElement li innerhtml = search results[i] classlist=`result${i}`; results-list.appendChild

// results-list.addeventlistener: on link click, fetch selected song lyrics+pifyIt, append to DOM, hide search results div, unhide lyrics div

//hide lyrics div, unhide search results div

/*  --------- HOW PRINCE WRITES ---------
// with thanks to PrinceVault.com

I > 👁️ //
of > "☮️"
heart > ♥
money > $
you > U //
ya > U
you're > U're
you'll > U'll
you'd > U'd
see > C
are > R
aren't > R'nt
why > Y
to > 2 //
too > 2 //
tonight > 2 night
tomorrow > 2morrow
for > 4 //
fore > 4
be > B //
bee > B
before > B4
into > in2
unto > un2
know > no //
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
