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
/* ----- PLACEHOLDER STRINGS ----- */
let renderArtist = "";
let renderTitle = "";
let renderLyrics = "";

let origLineStr = "";
const origLineArr = [];
const pifyLineArr = [];

/* ----- GET FORM DATA ----- */
function getFormData(e) {
  e.preventDefault();
  // format input for API
  let inputTitle = document.querySelector("#title").value;
  let inputArtist = document.querySelector("#artist").value;
  inputTitle = inputTitle.replace(" ", "+");
  inputArtist = inputArtist.replace(" ", "+");
  // API call
  const getAPIData = async () => {
    try {
      // get artist name
      const resArtist = await axios.get(
        `${apiURL}artist.search?q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
      );
      renderArtist =
        resArtist.data.message.body.artist_list[0].artist.artist_name;
      console.log("artist", renderArtist);
      // get song title
      const resTitle = await axios.get(
        `${apiURL}track.search?q_track=${inputTitle}&q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
      );
      let mxmTitle = resTitle.data.message.body.track_list[0].track.track_name;
      // remove extraneous title info
      const removeExtraNames = originalTitle => {
        // via (https://stackoverflow.com/questions/4292468/javascript-regex-remove-text-between-parentheses)
        return originalTitle.replace(/ *\([^)]*\) *| *\[[^)]*\] */g, "");
      };
      renderTitle = removeExtraNames(mxmTitle);
      console.log("title", renderTitle);
      // get lyrics
      const res = await axios.get(
        `${apiURL}matcher.lyrics.get?q_track=${inputTitle}&q_artist=${inputArtist}&apikey=${apiKey}`
      );
      // shorthand for Musixmatch lyrics object, lyrics text, and copyright notice
      const mxmLyrObj = res.data.message.body.lyrics;
      let lyricsFound = mxmLyrObj.lyrics_body;
      let lyricsCopyright = mxmLyrObj.lyrics_copyright;
      // append copyright to lyrics
      origLineStr = `${lyricsFound}\n\n${lyricsCopyright}`;
      console.log("lyrics", origLineStr);
    } catch {
      // remove this error message at next search
      document.querySelector(".error").innerHTML = "👁️ couldn't find Ur song";
      console.error("something went wrong");
    }
  };
  getAPIData();
}
/* ----- SPLIT origLineStr TO origLineArr ----- */
const splitLyrStr = str => {
  origLineArr = str.split("\n");
};

/* ----- MUTATE origLineArr TO pifyLineArr ----- */
const mutateLine = (lyricsArr, keyObject) => {
  const RE = new RegExp(
    `\\b${Object.keys(keyObject).join("\\b|\\b")}\\b`,
    "gi"
  );
  for (jkl = 0; jkl < lyricsArr.length; ++jkl) {
    const mutate = lyricsArr[jkl].replace(RE, matched => {
      return keyObject[matched];
    });
    pifyLineArr.push(mutate);
  }
};

/* ----- REDUCE pifyLineArr ----- */
const lyricReduce = arr => {
  return arr.reduce((a, b) => `${a}<br>${b}`);
};

/* ----- DOM RENDER --- */
const renderDOM = () => {
  // querySelectors
  const divSong = document.querySelector(".div-song");
  const divArtist = document.querySelector(".div-artist");
  const divLyrics = document.querySelector(".div-lyrics");
  // render to DOM
  divSong.innerHTML = renderTitle;
  divArtist.innerHTML = `by Prince feat. ${renderArtist}`;
  divLyrics.innerHTML = renderLyrics;
};

/* ----- DO STUFF ON FORM SUBMIT ----- */
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  getFormData()
    .then(splitLyrStr(origLineStr))
    .then(mutateLine(origLineArr, pifyBasic))
    .then((renderLyrics = lyricReduce(pifyLineArr)))
    .then(renderDOM());
});

// /* ----- WORKING VARIABLES ----- */
// let mxmLyrics = "";
// let lines = [];
// let linesMutate = [];
// let pifyLyrics = "";
// let renderArtist = "";
// let renderTitle = "";

// function getFormData(e) {
//   e.preventDefault();
//   /* ----- FORMAT INPUT FOR API ----- */
//   let inputTitle = document.querySelector("#title").value;
//   let inputArtist = document.querySelector("#artist").value;
//   inputTitle = inputTitle.replace(" ", "+");
//   inputArtist = inputArtist.replace(" ", "+");
//   const getData = async () => {
//     try {
//       /* ----- GET ARTIST NAME ----- */
//       const resArtist = await axios.get(
//         `${apiURL}artist.search?q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
//       );
//       renderArtist =
//         resArtist.data.message.body.artist_list[0].artist.artist_name;
//       console.log("resArtist", renderArtist);
//       /* ----- GET SONG TITLE ----- */
//       const resTitle = await axios.get(
//         `${apiURL}track.search?q_track=${inputTitle}&q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
//       );
//       renderTitle = resTitle.data.message.body.track_list[0].track.track_name;
//       // add transforms to remove anything in () or []
//       console.log("resTitle", renderTitle);
//       /* ----- GET LYRICS ----- */
//       const res = await axios.get(
//         `${apiURL}matcher.lyrics.get?q_track=${inputTitle}&q_artist=${inputArtist}&apikey=${apiKey}`
//       );
//       /* ----- LYRICS OBJECT TO VARIABLE ----- */
//       const mxmLyrObj = res.data.message.body.lyrics;
//       let lyricsFound = mxmLyrObj.lyrics_body;
//       let lyricsCopyright = mxmLyrObj.lyrics_copyright;
//       mxmLyrics = `${lyricsFound}\n\n${lyricsCopyright}`;
//       // split lyrics
//       lines = mxmLyrics.split("\n");
//       console.log("lines", lines);
//       // mutate
//       /* referred to
//   (https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings)
//   for multiple strings and
//   (https://stackoverflow.com/questions/4921701/javascript-regex-for-replace-words-inside-text-and-not-part-of-the-words)
//   for word boundaries */
//       const pifyLines = [];
//       const mutateLine = lyrics => {
//         const RE = new RegExp(
//           `\\b${Object.keys(pifyBasic).join("\\b|\\b")}\\b`,
//           "gi"
//         );
//         for (jkl = 0; jkl < lyrics.length; ++jkl) {
//           const mutate = lyrics[jkl].replace(RE, matched => {
//             return pifyBasic[matched];
//           });
//           pifyLines.push(mutate);
//           // console.log("mutate", mutate);
//         }
//       };
//       mutateLine(lines);
//       // console.log(pifyLines);
//       pifyLyrics = pifyLines.reduce((a, b) => `${a}<br>${b}`);
//       console.log(pifyLyrics);
//       // append lyrics to DOM
//       const divSong = document.querySelector(".div-song");
//       const divArtist = document.querySelector(".div-artist");
//       const divLyrics = document.querySelector(".div-lyrics");
//       divSong.innerHTML = renderTitle;
//       divArtist.innerHTML = `by Prince feat. ${renderArtist}`;
//       divLyrics.innerHTML = pifyLyrics;
//     } catch {
//       // remove this error message at next search
//       document.querySelector(".error").innerHTML = "👁️ couldn't find Ur song";
//       console.error("something went wrong");
//     }
//   };
//   getData();
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", getFormData);

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
