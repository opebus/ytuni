export function getYouTubeThumbnail(
  url: string,
  quality: 'low' | 'medium' | 'high' = 'high'
): string | false {
  const videoIdMatch =
    url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) ||
    url.match(/youtu.be\/(.{11})/);
  if (!videoIdMatch) {
    return false;
  }

  const videoId = videoIdMatch.pop();
  if (!videoId) {
    return false;
  }

  const qualityKeyMap: Record<string, string> = {
    low: 'sddefault',
    medium: 'mqdefault',
    high: 'hqdefault',
    max: 'maxresdefault',
  };

  const qualityKey = qualityKeyMap[quality] ?? qualityKeyMap.max;
  return `https://i.ytimg.com/vi/${videoId}/${qualityKey}.jpg`;
}
