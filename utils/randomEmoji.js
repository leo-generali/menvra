const randomEmoji = () => {
  const emojis = ['👍', '🙌', '😃', '😍'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return emoji;
};

export default randomEmoji;
