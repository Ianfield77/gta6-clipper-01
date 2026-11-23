# gta6-clipper-01 — Jason fixed Mandy's sink and found a finger

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ianfield77/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ianfield77/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 20 second vertical Short for the Make.fun bounty
"Clip GTA 6 for the most YouTube views" (gta6-clipper-01, $500, 20 places
by views, closes Monday 23 Nov 2026 08:00 WIB).

## The clip

`clip.mp4` — 1080x1920 (9:16), 20 seconds, H.264 + AAC.

- 0.0-12.0s: the moment. Jason lies under Mandy's kitchen sink and
  works the pipe with a wrench in the GTA 6 Pipework mission, then
  pulls out the thing clogging the drain: a finger. From "GTA 6 Mandy
  Mission: How to Fix the Sink (Pipework Guide)" by Dot (YouTube ID
  A4qQveWaDt0, 3:32), source time 111.0-123.0s. One continuous
  in-mission sequence, not a montage: hands on the pipe, wrench
  close-ups with the "USE WRENCH" prompt, then the reveal in his hand
  and his disgusted face. Hook text "HE FIXED HER SINK / AND FOUND A
  FINGER" on screen from the first frame.
- 12.0-20.0s: the pitch. Magenta end card with the make.fun ghost and
  the lines "MAKE CLIPS LIKE THIS WITH AI" and "AND EARN MONEY ON
  MAKE.FUN", then the bounty address
  "make.fun/bounty/gta6-clipper-01". Spoken by a voiceover: "Make clips
  like this with AI, and earn money on make.fun. The bounty is on
  make.fun."

Why this moment: the user asked for the Mandy sink scene specifically,
and it is the most talked about beat of the Pipework mission: a rent
collection job turns into plumbing, and the clog turns out to be a
finger, which is also the seed of the Mandy serial killer theory. The
hook spoils the punchline on purpose so viewers stay for the reveal.
The second source scanned, "Can You Romance Mandy in GTA 6? (And the
Creepy Secret Inside Her Sink)" by Apex Films (YouTube ID
kB5MeJWLH_U, 1:37), has the same wrench and finger shots around
60-72s, but it is a theory video with chapter cards, so the Dot
walkthrough was used instead: pure gameplay, one continuous take.
The channel is @Oktafianaldy, last video 4 years ago, so the clip is
built to be as punchy as a 20 second Short can be.

## Files

- `main.ts` — copies VIDEO.json to /output. Written by the agent in
  the first build session, standard library only, no network, no clock.
- `VIDEO.json` — the Shorts address. Placeholder until the video is
  uploaded; update it with the real URL before submitting.
- `clip.mp4` — the upload file. It is NOT part of the GitHub repo;
  only main.ts, VIDEO.json, LICENSE and README.md are pushed.
- `clip-grandma-hammers.mp4` — the previous version of the clip
  (grandma with two hammers, Trailer 1), kept as a backup.
- `clip-bank-robbery.mp4` — the first version of the clip (bank
  robbery, Trailer 2), kept as a backup. Not pushed, not uploaded.
- `footage/mandy-dot.mp4` — the source video (Dot guide, build input,
  not pushed).
- `footage/mandy-apex.mp4` — the second source scanned (Apex Films,
  not used in the final clip).
- `footage/trailer1.mp4`, `footage/trailer2.mp4` — the previous
  builds' source trailers.
- `press/mark-1024.png` — the make.fun ghost from the press kit.
- `moment3.mp4`, `pitch3.mp4`, `pitch3_voice.mp3`,
  `pitch3_voice2.mp3`, `frames3/`, `scan-mandy-*/` — build
  intermediates, not pushed.

## Upload (from the phone, channel @Oktafianaldy)

1. Upload `clip.mp4` as a Short (vertical, under 60 seconds).
2. Title: Jason fixed Mandy's sink and found a finger
3. Description, copy exactly:

Jason fixed Mandy's sink in GTA 6 and found something he was not expecting in the pipe.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
Play code: makefun-skyline-cotton-globe

Footage: GTA 6 Mandy Mission: How to Fix the Sink (Pipework Guide) by Dot, gameplay footage by OP GAME GUIDES, Grand Theft Auto VI, Rockstar Games.

4. Tags: #GTA6 #Shorts #GrandTheftAutoVI #ViceCity #Mandy
5. Send the Shorts URL back so VIDEO.json can be updated and the
   entry submitted before Monday 23 Nov 2026 08:00 WIB.

## Credits

Footage: "GTA 6 Mandy Mission: How to Fix the Sink (Pipework Guide)"
by Dot (YouTube), gameplay footage by OP GAME GUIDES, Grand Theft
Auto VI (Rockstar Games). Ghost logo: make.fun press kit. Voice: TTS.
Cut and rendered with ffmpeg by the agent in this session. No finished
clip from anyone else was used.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ff8eyyzn&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
