const bucket = ({ capacity = 0, content = 0 } = {}) => {
  if (content > capacity) return bucket({ capacity, content: capacity });
  const pour = otherContent => bucket({ capacity, content: (content + otherContent) });
  return Object.assign(pour,
    {
      fill: contentToAdd => bucket({ capacity, content: contentToAdd + content }),
      valueOf: () => content,
    });
};

module.exports = bucket;

