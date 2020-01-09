document.addEventListener("DOMContentLoaded", () => {
  /* ----- FADE IN DIVS ON LOAD ----- */
  const logoDiv = document.querySelector(".logo");
  const aboutDiv = document.querySelector(".about");
  const searchDiv = document.querySelector(".search");
  setTimeout(() => {
    logoDiv.classList.remove("hidden");
  }, 250);
  setTimeout(() => {
    aboutDiv.classList.remove("hidden");
  }, 1000);
  setTimeout(() => {
    searchDiv.classList.remove("hidden");
  }, 1750);

  /* ----- MUSIXMATCH API ----- */
  const apiKey = "dc5c9b28a701d08bdfc60ec825c88602";
  const apiURL = "https://api.musixmatch.com/ws/1.1/";
  // const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  /* ----- LOCK SEARCH ON SCROLL ----- */
  window.onscroll = function() {
    if (
      document.body.scrollTop > 390 ||
      document.documentElement.scrollTop > 390
    ) {
      searchDiv.classList.add("search-lock");
    } else {
      searchDiv.classList.remove("search-lock");
    }
  };

  /* ----- PLACEHOLDER STRINGS ----- */
  let renderArtist = "";
  let renderTitle = "";
  let renderLyrics = "";

  let origLineStr = "";
  let origLineArr = [];
  let pifyLineArr = [];

  /* ----- SPLIT origLineStr TO origLineArr ----- */
  const splitLyrStr = str => {
    origLineArr = str.split("\n");
  };

  /* ----- MUTATE origLineArr TO pifyLineArr ----- */
  /* referred to
     (https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings)
     for multiple strings and
     (https://stackoverflow.com/questions/4921701/javascript-regex-for-replace-words-inside-text-and-not-part-of-the-words)
     for word boundaries */
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
    renderLyrics = arr.reduce((a, b) => `${a}<br>${b}`);
  };

  /* ----- DOM RENDER --- */
  const divTitle = document.querySelector(".div-title");
  const divArtist = document.querySelector(".div-artist");
  const divLyrics = document.querySelector(".div-lyrics");
  const lyricsDiv = document.querySelector(".lyrics-div");

  const renderDOM = () => {
    divTitle.innerHTML = renderTitle;
    divArtist.innerHTML = `by <span class="princeify">Prince</span> feat. ${renderArtist}`;
    divLyrics.innerHTML = renderLyrics;
    lyricsDiv.classList.remove("hidden");
  };

  /* ----- CLEAR OLD DATA ----- */
  const clearData = () => {
    if (pifyLineArr != []) {
      pifyLineArr = [];
    }
    if (divTitle.innerHTML != "") {
      divTitle.innerHTML = "";
    }
    if (divArtist.innerHTML != "") {
      divArtist.innerHTML = "";
    }
    if (divLyrics.innerHTML != "") {
      divLyrics.innerHTML = "";
    }
    lyricsDiv.classList.add("hidden");
  };

  /* ----- GET FORM DATA ----- */
  function getFormData(e) {
    e.preventDefault();
    clearData();
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
        let mxmTitle =
          resTitle.data.message.body.track_list[0].track.track_name;
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
        // NOW DO EVERYTHING INTERESTING
        splitLyrStr(origLineStr);
        console.log(origLineArr);
        mutateLine(origLineArr, pifyOMG);
        console.log(pifyLineArr);
        lyricReduce(pifyLineArr);
        console.log(renderLyrics);
        renderDOM();
      } catch {
        // remove this error message at next search
        divTitle.innerHTML = "👁️ couldn't find Ur song";
        lyricsDiv.classList.remove("hidden");
        console.error("song not found or something went wrong");
      }
    };
    getAPIData();
  }

  /* ----- DO STUFF ON FORM SUBMIT ----- */
  const form = document.querySelector("form");
  form.addEventListener("submit", getFormData);
});
