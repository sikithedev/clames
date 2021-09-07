module.exports = clames = (...args) => {
  const classes = new Set();

  args.forEach(arg => {
    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      arg && classes.add(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = clames(...arg.flat(Infinity));
      inner && classes.add(inner);
    } else if (argType === 'object') {
      for (const key in arg) {
        arg[key] && classes.add(key);
      }
    }
  });

  return [...classes].join(' ');
};
