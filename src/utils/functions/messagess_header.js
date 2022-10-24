const messagess_header = () => {
  const messagess = [
    `Multiple lines of text that form the lede.`,
    `informing new readers quickly and efficiently.`,
    `about what’s most interesting in this post’s contents.`,
    `dadasdasdasdas`,
  ]

  return messagess[Math.floor(Math.random() * messagess.length)];
}

export default messagess_header;
