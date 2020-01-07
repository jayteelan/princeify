/* ----- DOM RENDER --- */
// querySelectors
const divSong = document.querySelector(".div-song");
const divArtist = document.querySelector(".div-artist");
const divLyrics = document.querySelector(".div-lyrics");
// render to DOM
divSong.innerHTML = renderTitle;
divArtist.innerHTML = `by Prince feat. ${renderArtist}`;
divLyrics.innerHTML = renderLyrics;

/* ----- REDUCE pifyLineArr ----- */
// reduce function
const lyricReduce = arr => {
  return arr.reduce((a, b) => `${a}<br>${b}`);
};
// invocation
const renderLyrics = lyricReduce(pifyLineArr);

/* ----- MUTATE origLineArr TO pifyLineArr ----- */
// empty array to hold mutated lyrics
const pifyLineArr = [];
// mutation function
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
// invocation
mutateLine(origLineArr, pifyBasic);

/* ----- SPLIT origLineStr TO origLineArr ----- */
const origLineArr = origLineStr.split("\n");

/* ----- CREATE origLineStr VARIABLE ----- */
// shorthand for Musixmatch lyrics object, lyrics text, and copyright notice
const mxmLyrObj = res.data.message.body.lyrics;
let lyricsFound = mxmLyrObj.lyrics_body;
let lyricsCopyright = mxmLyrObj.lyrics_copyright;
// append copyright to lyrics
let origLineStr = `${lyricsFound}\n\n${lyricsCopyright}`;

/* ----- GET LYRICS ----- */
const res = await axios.get(
  `${apiURL}matcher.lyrics.get?q_track=${inputTitle}&q_artist=${inputArtist}&apikey=${apiKey}`
);

/* ----- GET SONG TITLE ----- */
const resTitle = await axios.get(
  `${apiURL}track.search?q_track=${inputTitle}&q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
);
let mxmTitle = resTitle.data.message.body.track_list[0].track.track_name;

/* ----- TRANSFORM mxmTitle ----- */
const removeExtraNames = originalTitle => {
  // via (https://stackoverflow.com/questions/4292468/javascript-regex-remove-text-between-parentheses)
  return originalTitle.replace(/ *\([^)]*\) *| *\[[^)]*\] */g, "");
};
renderTitle = removeExtraNames(mxmTitle);

/* ----- GET ARTIST NAME ----- */
const resArtist = await axios.get(
  `${apiURL}artist.search?q_artist=${inputArtist}&page_size=1&apikey=${apiKey}`
);
let renderArtist =
  resArtist.data.message.body.artist_list[0].artist.artist_name;

/* ----- API CALL ----- */
const getData = async () => {
  try {
    // get artist name
    // get song title
    // get lyrics
  } catch {
    // remove this error message at next search
    document.querySelector(".error").innerHTML = "👁️ couldn't find Ur song";
    console.error("something went wrong");
  }
  getData();
};

/* ----- FORMAT INPUT FOR API ----- */
let inputTitle = document.querySelector("#title").value;
let inputArtist = document.querySelector("#artist").value;
inputTitle = inputTitle.replace(" ", "+");
inputArtist = inputArtist.replace(" ", "+");

/* ----- GET FORM DATA ----- */
function getFormData(e) {
  e.preventDefault();
  // get data
}
const form = document.querySelector("form");
form.addEventListener("submit", getFormData);
