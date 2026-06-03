const assert = require("node:assert/strict");
const { extractYoutubeId, youtubeThumbnailUrl, youtubeWatchUrl, normalizeVideoEntry } = require("../video-utils");

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test("builds a high quality YouTube thumbnail URL from a video id", () => {
  assert.equal(
    youtubeThumbnailUrl("abc123XYZ"),
    "https://i.ytimg.com/vi/abc123XYZ/hqdefault.jpg"
  );
});

test("builds a YouTube watch URL from a video id", () => {
  assert.equal(youtubeWatchUrl("abc123XYZ"), "https://www.youtube.com/watch?v=abc123XYZ");
});

test("normalizes video entries with a YouTube id", () => {
  const video = normalizeVideoEntry({
    title: "Korea highlights",
    youtubeId: "abc123XYZ",
    channel: "KFA TV"
  });

  assert.equal(video.url, "https://www.youtube.com/watch?v=abc123XYZ");
  assert.equal(video.thumbnailUrl, "https://i.ytimg.com/vi/abc123XYZ/hqdefault.jpg");
  assert.equal(video.channel, "KFA TV");
});

test("extracts YouTube ids from watch and short URLs", () => {
  assert.equal(extractYoutubeId("https://www.youtube.com/watch?v=LZAdpDpslcc"), "LZAdpDpslcc");
  assert.equal(extractYoutubeId("https://youtu.be/LZAdpDpslcc?si=share"), "LZAdpDpslcc");
});

test("normalizes YouTube watch URLs into thumbnail cards", () => {
  const video = normalizeVideoEntry({
    title: "KFA highlights",
    url: "https://youtu.be/LZAdpDpslcc?si=share",
    channel: "KFATV"
  });

  assert.equal(video.youtubeId, "LZAdpDpslcc");
  assert.equal(video.thumbnailUrl, "https://i.ytimg.com/vi/LZAdpDpslcc/hqdefault.jpg");
});

test("keeps existing search videos without forcing thumbnails", () => {
  const video = normalizeVideoEntry({
    title: "Search result",
    url: "https://www.youtube.com/results?search_query=korea",
    channel: "YouTube search"
  });

  assert.equal(video.thumbnailUrl, "");
  assert.equal(video.url, "https://www.youtube.com/results?search_query=korea");
});
