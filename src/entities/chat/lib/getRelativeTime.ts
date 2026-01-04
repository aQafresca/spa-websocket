export const getRelativeTime = (timestamp: string) => {
  const messageTime = new Date(timestamp);
  const now = new Date();
  const diff = Math.floor((now.getTime() - messageTime.getTime()) / 1000);

  if (diff < 10) return 'just now';
  if (diff < 60) return `${diff} second${diff === 1 ? '' : 's'} ago`;

  const minutes = Math.floor(diff / 60);

  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;

  const hours = Math.floor(diff / 3600);

  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;

  return messageTime.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};
