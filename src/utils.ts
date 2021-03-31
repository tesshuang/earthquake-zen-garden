export function formatDate(timestamp: number) {
  const date = new Date(timestamp)
    .toDateString()
    .slice(4);
  const time = new Date(timestamp).toLocaleString(
    'en-US',
    {
      hour: '2-digit',
      minute: '2-digit',
    },
  );
  return `${date} ${time}`;
}