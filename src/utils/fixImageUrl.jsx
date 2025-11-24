export function fixImageUrl(url) {
  if (!url) return "";
  if (url.startsWith("http")) {
    // Ændr port hvis det er localhost:4000
    return url.replace("localhost:4000", "localhost:5000");
  } else if (url.startsWith("/")) {
    // Relativ sti → fuld URL
    return `http://localhost:5000${url}`;
  }
  return url;
}

/**
 * Retter en array af objekter med et billede-felt (default 'image')
 */
export function fixImageUrlsInArray(items, key = "image") {
  return items.map(item => ({
    ...item,
    [key]: fixImageUrl(item[key])
  }));
}