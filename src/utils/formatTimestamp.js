/**
 * Formats a given timestamp into a readable date and time string.
 * @param {string | Date} timestamp - The timestamp to format.
 * @returns {string} - Formatted date string.
 */
export default function formatTimestamp(timestamp = null) {
  const date = timestamp ? new Date(timestamp) : new Date();
  return date.toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'medium',
  });
}
  