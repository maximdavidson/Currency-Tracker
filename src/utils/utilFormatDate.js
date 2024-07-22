export const formatDate = (dateString) => {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
};
