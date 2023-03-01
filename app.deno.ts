import { getSubtitles } from "npm:youtube-captions-scraper";

import type { Caption } from "./types.ts";
import { SEARCH_TERM, VIDEO_ID } from "./constants.ts";

let count = 0;
const captions: Caption[] = await getSubtitles({ videoID: VIDEO_ID });

for (const caption of captions) {
  const words = caption.text.split(" ");

  for (const word of words) {
    const term = word.trim().toLowerCase();
    count += Number(term === SEARCH_TERM);
  }
}

console.log(
  `\nmentioned like %c${count} times, yeah.`,
  "background-color: black; color: orange;"
);
