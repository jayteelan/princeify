# Project Overview

## Project Name

Princeify

## Project Description

Princeify allows the user to search for song lyrics and then "Princeifies" them with Prince's characteristic abbreviations such as "U," "👁️," and "2."

## API and Data Sample

Princeify uses the [Musixmatch API](https://developer.musixmatch.com/) to pull up song lyrics (well, at least 30% of them - full lyrics are behind a paywall).

```


{
message: {
header: {
status_code: 200,
execute_time: 0.077229976654053
},
body: {
lyrics: {
lyrics_id: 19610684,
explicit: 0,
lyrics_body: "Now and then I think of when we were together Like when you said you felt so happy you could die Told myself that you were right for me But felt so lonely in your company But that was love, and it's an ache I still remember You can get addicted to a certain kind of sadness Like resignation to the end, always the end So when we found that we could not make sense Well, you said that we would still be friends But I'll admit that I was glad that it was over But you didn't have to cut me off Make out like it never happened and that we were nothing And I don't even need your love But you treat me like a stranger, and that feels so rough No, you didn't have to stoop so low Have your friends, collect your records, and then change your number ... ******* This Lyrics is NOT for Commercial use ******* (1409618871795)",
script_tracking_url: "https://tracking.musixmatch.com/t1.0/m_js/e_1/sn_0/l_19610684/su_0/rs_0/tr_3vUCAKgtc9fFcHEccdWyaSMU9yu10L0suYXzo9lyyV_XNlSIkneRO3Dsx3CWiLt2V09dcKy3XDLMcgbmz_Yzj9FMYTpaDZuLyMy-2g1U09d7ZpAkGA5NKv4WfbpP0sC3sB4BGAcuquQi7jLrCwrftJBp0w4qm43U6WYP2gMWobMZKYH259gS5iMHIkE7Efg8zkuU7FLSVVh-wMsT7HO_3gDZIozrW7S5tNoyEB1ObSCStg7kcFNAcaje9n1yO40g4p2ileyBa6l29dEHsu-wgbBrwPD-5QeQmy4VROnol6e6ES7FmDUPO0RSJJUSaEe-mb0uXGCjcgTxcok5JLgeEorm4-XJQJi_WOWE2ZPcdrGQSNLpoR1BuRZrRrPNNmWtzx0tHN8W4hRULaqQARLA7PbZ6tntzeg4s-sB6zkKGZ1K6TnDePJ0IM5uJ3IiuCu4ARCOyV3irzsWivKixSMPkQGVecdDD2O6/",
pixel_tracking_url: "https://tracking.musixmatch.com/t1.0/m_img/e_1/sn_0/l_19610684/su_0/rs_0/tr_3vUCAF-NOfMJdFm64Hape8Owr6wKZSs0T_vNOXi_75sH4W5NiDl5QYShiobd1QIqM1BmEbxTGK2ZH0BX9VSHPNbfkBLquXVUZ0h717nBlR_fZKjL23HSJreE2lTikREEdTQqKatik7xMBqDa2XKrq8s_ETFkVLnZjJ7mAhrem736FJ3nEaGmZmODycRxFGTOPDLc-361myW5JqEALRJstdvShyfr8v2SIoS3gdHrRlT-5f7iCPeB-eOflP7yvQ8QTYTu3ziKT4jq2100glXoLJqqcCU7sky2kTeQQJaoMxg9AYrA1zM2jjxA2F8yv1SN9FV1scsdEYUaYU8Kd867lIFKSKz-wPF-vPE9pjIjzfowCUgueR77cbm8KR38KF47azt0YuBO0vxb-tvrz05AtOUIgx6WY1m0z2UFfdUFok2DfKB--ky8xLfYiKV8Uhin78ga4klBVlAT7DGvXovMn0UWE1HAHGbf/",
lyrics_copyright: "Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.",
updated_time: "2019-09-01T00:58:00Z"
}
}
}
}

```

## Wireframes

![wireframes](https://i.imgur.com/ZdmmsUY.jpg "before and after search")

#### MVP

- Find and use external api
- Transform song lyric text
- Render data on page

#### PostMVP

- save lyrics to localStorage
- randomly add Princely exclamations to lyrics
- replace notes, e.g. [CHORUS] becomes [NPG]
- randomize backing band

## Project Schedule

| Day     | Deliverable                                 | Status     |
| ------- | ------------------------------------------- | ---------- |
| Jan 3   | proposal, basic HTML, API fetch, search bar | Complete   |
| Jan 4/5 | song lyric mutatation pseudocode            | Complete   |
| Jan 6   | lyric mutation JS                           | Complete   |
| Jan 7   | postMVP                                     | Incomplete |
| Jan 8   | styling                                     | Complete   |
| Jan 9   | present                                     | Incomplete |

## Priority Matrix

![matrix](https://i.imgur.com/Vor475U.jpg "priority matrix")

## Timeframes

| Component        | Priority | Estimated Time |    Time Invested     | Actual Time |
| ---------------- | :------: | :------------: | :------------------: | :---------: |
| skeleton/API get |    H     |      3hrs      |         2hrs         |    2hrs     |
| search/axios     |    H     |      3hrs      |         6hrs         |    6hrs     |
| mutations        |    H     |    8-10hrs     | 9hrs + 6 hrs rewrite |    15hrs    |
| DOM render       |    H     |      3hrs      |        0.5hrs        |   0.5hrs    |
| styling          |    M     |     8 hrs      |         9hrs         |    9hrs     |
| Total            |    H     |    25-27hrs    |       32.5hrs        |   32.5hrs   |

## Code Snippet

this is the function to mutate the lyric text after it's been converted to an array of lines. it generates a RegEx from an object composed of target words (keys) and their replacements (values), repecting word boundaries. once the RegEx has been created, the function mutates each line (element) from the lyric array and pushes it to an empty array for "Princeified" lyrics.

```

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


```

## Change Log

**8. Jan, 2020**

- fully styled
- added responsive layouts
- added JS to gradually reveal divs

**7. Jan, 2020**

- restructured main.js
- removed extraneous song title info
- streamlined RegExp
- increased number of strings and broke out object to another file

**6. Jan, 2020**

- lyric mutation logic completed
- added API calls for track title and artist name
- render results to DOM

**5. Jan, 2020**

- completed lyric retrieval; logs to console
- pseudocoded remaining app logic
- began text mutation JS

**3. Jan, 2020**

- initial skeleton HTML
- API data retrieval/search partially complete
- found ~40 text mutations to be coded
