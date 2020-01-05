/* --------- MUSIXMATCH API --------- */
const apiKey = "dc5c9b28a701d08bdfc60ec825c88602";
const apiURL = "https://api.musixmatch.com/ws/1.1/";

/* --------- GET LYRICS --------- */

let resLyrics = "";
function getFormData(e) {
  e.preventDefault();
  let inputTitle = document.querySelector("#title").value;
  let inputArtist = document.querySelector("#artist").value;
  inputTitle = inputTitle.replace(" ", "+");
  inputArtist = inputArtist.replace(" ", "+");
  // console.log(inputTitle);
  // console.log(inputArtist);
  const getData = async () => {
    // e.preventDefault();
    try {
      const res = await axios.get(
        `${apiURL}matcher.lyrics.get?q_track=${inputTitle}&q_artist=${inputArtist}&apikey=${apiKey}`
      );
      let lyricsFound = res.data.message.body.lyrics.lyrics_body;
      let lyricsCopyright = res.data.message.body.lyrics.lyrics_copyright;
      resLyrics = `${lyricsFound}\n\n${lyricsCopyright}`;
      console.log(resLyrics);
    } catch {
      console.error("something went wrong");
    }
  };
  getData();
}

const form = document.querySelector("form");
form.addEventListener("submit", getFormData);
// const submit = document.querySelector("button");
/*
const about = document.querySelector(".about");

const searchResults = document.querySelector(".search-results");
const resultsList = document.querySelector(".results-list");

const lyricsDiv = document.querySelector(".lyrics-div");
const resSong = document.querySelector(".res-song");
const resArtist = document.querySelector(".res-artist");
const resLyrics = document.querySelector(".res-lyrics");

/*  --------- HOW PRINCE WRITES ---------
// with thanks to PrinceVault.com

I > 👁️
of > "☮️"
heart > ♥
money > $
you > U
ya > U
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
