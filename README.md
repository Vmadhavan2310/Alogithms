This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deployed on Vercel
- Custom Video Player App Deployed on Vercel. Please use the link to checkout. [Rigi Video player](https://rigi-video-player-three.vercel.app/)
- [github link](https://github.com/Vmadhavan2310/rigi-video-player)

## Features added for custom video player
- Play/Pause toggle(Shortcut alt+P)
- Forward seek (Shortcut alt+S)
- Backward seek (Shortcut alt+B)
- Timer display both Playback time and duration.
- Autoplay
- Video progress bar
- volume Increase/Decrease
- Mute/Unmute
- Speed selector for playback speed adjustment.
- Fullscreen mode

## Google API'S
- Used Googlesheet as backend to fetch the data through API which includes basic details for the video. [GoogleSheet Link](https://docs.google.com/spreadsheets/d/1kjRGMS3muhKX2LRg5KI57bx1d7qPlzoun95qmrfPvp4/edit#gid=0)
    - Video ID
    - Video Title
    - Video URL
    - Video thumbnail

## Features added for Playlist
- Sorting the Video Ascending/Descending by Vidoe title
- Search bar to filter the videos by Video Title
- loader while fetching data from google sheet
- Used localstorage for better performance. 

## State Management
- Implemented Redux for managing state through API.
- Converted to global state wherease all componenets can receive state from Redux

## Light house Report
- ![Desktop Performance 99%](image.png)
- ![Desktop Performance 87%](image-1.png)

## Things followed for Performance Optimization
- Used CDN assets 
- Utilized browser storage for better page loading
- Optimized code 
