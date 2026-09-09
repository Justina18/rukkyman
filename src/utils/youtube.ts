export function getYouTubeVideoId(youtubeUrl: string): string {
  try {
    const url = new URL(youtubeUrl);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace(/^\//, "");
    }

    if (url.hostname.includes("youtube.com")) {
      return url.searchParams.get("v") ?? "";
    }
  } catch {
    return "";
  }

  return "";
}

export function getYouTubeEmbedUrl(youtubeUrl: string, autoplay = false): string {
  const videoId = getYouTubeVideoId(youtubeUrl);
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
  });

  if (autoplay) {
    params.set("autoplay", "1");
    params.set("mute", "1");
  }

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}