(function attachVideoUtils(root) {
  function extractYoutubeId(value) {
    const text = String(value || "").trim();
    if (!text) return "";

    try {
      const url = new URL(text);
      const host = url.hostname.replace(/^www\./, "");
      if (host === "youtu.be") return cleanId(url.pathname.split("/").filter(Boolean)[0]);
      if (host.endsWith("youtube.com")) {
        if (url.searchParams.get("v")) return cleanId(url.searchParams.get("v"));
        const parts = url.pathname.split("/").filter(Boolean);
        const embedIndex = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
        if (embedIndex >= 0) return cleanId(parts[embedIndex + 1]);
      }
    } catch (_error) {
      return cleanId(text);
    }

    return "";
  }

  function cleanId(value) {
    const id = String(value || "").trim();
    return /^[a-zA-Z0-9_-]{6,32}$/.test(id) ? id : "";
  }

  function youtubeThumbnailUrl(youtubeId, quality = "hqdefault") {
    const id = extractYoutubeId(youtubeId);
    return id ? `https://i.ytimg.com/vi/${encodeURIComponent(id)}/${quality}.jpg` : "";
  }

  function youtubeWatchUrl(youtubeId) {
    const id = extractYoutubeId(youtubeId);
    return id ? `https://www.youtube.com/watch?v=${encodeURIComponent(id)}` : "";
  }

  function normalizeVideoEntry(video = {}) {
    const youtubeId = extractYoutubeId(video.youtubeId || video.url);
    return {
      ...video,
      youtubeId,
      channel: video.channel || "YouTube",
      url: video.url || youtubeWatchUrl(youtubeId),
      thumbnailUrl: video.thumbnailUrl || youtubeThumbnailUrl(youtubeId),
      thumbnailSource: youtubeId ? "YouTube thumbnail" : video.thumbnailSource || ""
    };
  }

  const api = {
    extractYoutubeId,
    youtubeThumbnailUrl,
    youtubeWatchUrl,
    normalizeVideoEntry
  };

  root.VIDEO_UTILS = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
