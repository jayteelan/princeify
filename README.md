# Princeify

## Princeify allows the user to search for song lyrics and then "Princeifies" them with Prince's characteristic abbreviations such as "U," "👁️," and "2."

## API and Data Sample

Princeify uses the Musixmatch API to pull up song lyrics (well, at least 30% of them - full lyrics are behind a paywall).

````

{
message: {
header: {
status_code: 200,
execute_time: 0.094674825668335
},
body: {
lyrics: {
lyrics_id: 19610684,
explicit: 0,
lyrics_body: "Now and then I think of when we were together Like when you said you felt so happy you could die Told myself that you were right for me But felt so lonely in your company But that was...


```

## Wireframes

![wireframes](https://i.imgur.com/ZdmmsUY.jpg "before and after search")

#### MVP

- Find and use external api
- Transform song lyric text
- Render data on page

#### PostMVP

- save/share lyrics
- randomly add Princely exclamations to lyrics
- replace notes, e.g. [CHORUS] becomes [NPG]
- randomize backing band

## Project Schedule


| Day     | Deliverable                                          | Status     |
| ------- | ---------------------------------------------------- | ---------- |
| Jan 3 | proposal, basic HTML, API fetch, search bar                                | Incomplete |
| Jan 4/5 | song lyric mutatation pseudocode| Incomplete |
| Jan 6 | lyric mutation JS       | Incomplete |
| Jan 7 | postMVP                          | Incomplete |
| Jan 8 | styling                         | Incomplete |
| Jan 9 | present                                                | Incomplete |

## Priority Matrix

![matrix](https://i.imgur.com/Vor475U.jpg "priority matrix")

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.


Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| skeleton/API get     |    H     |      3hrs      |        |       |
| search   |    H     |    3hrs      |        |      |
| mutations | H | 8-10hrs |  |  |
|DOM render| H | 3hrs |  |  |
|styling | M | 8 hrs |  |  |
| Total            |    H     |       25-27hrs    |       |        |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

````

function reverse(string) {
// here is the code to reverse a string of text
}

```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
```

```

```
