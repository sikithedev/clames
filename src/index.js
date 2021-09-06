const clames = (...args) => {
  let classes = [];

  args.forEach((arg) => {
    let parsed = parseValue(arg);
    parsed && classes.push(parsed);
  });

  return classes.join(" ");
};

const parseValue = (value) => {
  const classes = [];
  const valueType = typeof value;

  if (valueType === "string" || valueType === "number") {
    classes.push(value);
  } else if (Array.isArray(value) && value.length) {
    value.forEach((item) => {
      let innerItems = parseValue(item);
      innerItems && classes.push(innerItems);
    });
  } else if (valueType === "object") {
    for (const key in value) {
      value[key] && classes.push(key);
    }
  }

  return classes.join(" ");
};

module.exports = clames;
