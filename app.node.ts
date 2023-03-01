import { getSubtitles } from "youtube-captions-scraper";

import type { Caption } from "./types";
import { SEARCH_TERM, VIDEO_ID } from "./constants";

getSubtitles({ videoID: VIDEO_ID }).then((captions: Caption[]) => {
  let count = 0;

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
});
