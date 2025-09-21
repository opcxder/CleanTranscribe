/**
 * Video utility functions for YouTube URL processing
 */

/**
 * Extract video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} - Video ID or null if invalid
 */
export function extractVideoId(url) {
  if (!url || typeof url !== 'string') return null;
  
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7] && match[7].length === 11) ? match[7] : null;
}

/**
 * Get YouTube embed URL from video ID
 * @param {string} videoId - YouTube video ID
 * @returns {string} - Embed URL
 */
export function getEmbedUrl(videoId) {
  if (!videoId) return '';
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Validate if a URL is a valid YouTube URL
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid YouTube URL
 */
export function isValidYouTubeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  const videoId = extractVideoId(url);
  return videoId !== null;
}

/**
 * Get YouTube thumbnail URL
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality (default, mqdefault, hqdefault, sddefault, maxresdefault)
 * @returns {string} - Thumbnail URL
 */
export function getThumbnailUrl(videoId, quality = 'hqdefault') {
  if (!videoId) return '';
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Get YouTube watch URL from video ID
 * @param {string} videoId - YouTube video ID
 * @returns {string} - Watch URL
 */
export function getWatchUrl(videoId) {
  if (!videoId) return '';
  return `https://www.youtube.com/watch?v=${videoId}`;
}