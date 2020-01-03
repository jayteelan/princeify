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
| Jan 3   | proposal, basic HTML, API fetch, search bar | Incomplete |
| Jan 4/5 | song lyric mutatation pseudocode            | Incomplete |
| Jan 6   | lyric mutation JS                           | Incomplete |
| Jan 7   | postMVP                                     | Incomplete |
| Jan 8   | styling                                     | Incomplete |
| Jan 9   | present                                     | Incomplete |

## Priority Matrix

![matrix](https://i.imgur.com/Vor475U.jpg "priority matrix")

## Timeframes

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| skeleton/API get |    H     |      3hrs      |               |             |
| search           |    H     |      3hrs      |               |             |
| mutations        |    H     |    8-10hrs     |               |             |
| DOM render       |    H     |      3hrs      |               |             |
| styling          |    M     |     8 hrs      |               |             |
| Total            |    H     |    25-27hrs    |               |             |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```

function reverse(string) {
// here is the code to reverse a string of text
}


```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
