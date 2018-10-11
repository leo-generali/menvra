const shadow = {
  low: '0 5px 20px rgba(50, 50, 93, 0.05), 0 2px 15px rgba(0, 0, 0, 0.07)',
  mid: '0 10px 35px rgba(50, 50, 93, 0.1), 0 2px 15px rgba(0, 0, 0, 0.07)',
  high: '0 12px 40px rgba(50, 50, 93, 0.1), 0 2px 15px rgba(0, 0, 0, 0.07);'
};

const transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out'
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out'
  },
  dropdown: {
    off: 'all 0.35s ease-out'
  }
};

export { shadow, transition };
