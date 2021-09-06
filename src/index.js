const clames = (...args) => {
  const classes = [];

  args.forEach(arg => {
    const parsedArg = parseValue(arg);
    parsedArg && classes.push(parsedArg);
  });

  return classes.join(' ');
};

const parseValue = args => {
  const classes = [];
  const argType = typeof args;

  if (argType === 'string' || argType === 'number') {
    args && classes.push(args);
  } else if (Array.isArray(args) && args.length) {
    args.forEach(arg => {
      const inner = parseValue(arg);
      inner && classes.push(inner);
    });
  } else if (argType === 'object') {
    for (const key in args) {
      args[key] && classes.push(key);
    }
  }

  return classes.join(' ');
};

module.exports = clames;
