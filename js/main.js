/* ----- MUSIXMATCH API ----- */
const apiKey = "dc5c9b28a701d08bdfc60ec825c88602";
const apiURL = "https://api.musixmatch.com/ws/1.1/";

/* ----- REPLACEMENTS ----- */
const pifyBasic = {
  // Object.keys = original words; Object.values = Princified substitutions
  i: "👁️",
  you: "U",
  your: "Ur",
  are: "R",
  to: "2",
  too: "2",
  for: "4",
  be: "B",
  know: "no",
  I: "👁️",
  You: "U",
  Your: "Ur",
  Are: "R",
  To: "2",
  Too: "2",
  For: "4",
  Be: "B",
  Know: "No"
};

/* ----- GET LYRICS ----- */
let mxmLyrics = "";
let lines = [];
let linesMutate = [];
let pifyLyrics = "";
let renderArtist = "";
let renderTitle = "";

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
      const resTitle = await axios.get(
        `${apiURL}track.search?q_track=${inputTitle}&q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
      );
      renderTitle = resTitle.data.message.body.track_list[0].track.track_name;
      console.log("resTitle", renderTitle);
      const resArtist = await axios.get(
        `${apiURL}artist.search?q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
      );
      renderArtist =
        resArtist.data.message.body.artist_list[0].artist.artist_name;
      console.log("resArtist", renderArtist);
      const mxmLyrObj = res.data.message.body.lyrics;
      let lyricsFound = mxmLyrObj.lyrics_body;
      let lyricsCopyright = mxmLyrObj.lyrics_copyright;
      mxmLyrics = `${lyricsFound}\n\n${lyricsCopyright}`;
      // split lyrics
      lines = mxmLyrics.split("\n");
      console.log("lines", lines);
      // mutate
      /* referred to
  (https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings)
  for multiple strings and
  (https://stackoverflow.com/questions/4921701/javascript-regex-for-replace-words-inside-text-and-not-part-of-the-words)
  for word boundaries */
      const pifyLines = [];
      const mutateLine = lyrics => {
        for (jkl = 0; jkl < lyrics.length; ++jkl) {
          const mutate = lyrics[jkl].replace(
            /\bi\b|\byou\b|\byour\b|\bare\b|\bto\b|\btoo\b|\bfor\b|\bbe\b|\bknow\b|\bI\b|\bYou\b|\bYour\b|\bAre\b|\bTo\b|\bToo\b|\bFor\b|\bBe\b|\bKnow\b/gi,
            matched => {
              return pifyBasic[matched];
            }
          );
          pifyLines.push(mutate);
          // console.log("mutate", mutate);
        }
      };
      mutateLine(lines);
      // console.log(pifyLines);
      pifyLyrics = pifyLines.reduce((a, b) => `${a}<br>${b}`);
      console.log(pifyLyrics);
      // append lyrics to DOM
      const divSong = document.querySelector(".div-song");
      const divArtist = document.querySelector(".div-artist");
      const divLyrics = document.querySelector(".div-lyrics");
      divSong.innerHTML = renderTitle;
      divArtist.innerHTML = `by Prince feat. ${renderArtist}`;
      divLyrics.innerHTML = pifyLyrics;
    } catch {
      document.querySelector(".error").innerHTML = "👁️ couldn't find Ur song";
      console.error("something went wrong");
    }
  };
  getData();
}

const form = document.querySelector("form");
form.addEventListener("submit", getFormData);

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
