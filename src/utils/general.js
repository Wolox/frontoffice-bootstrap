export const stripObjectBasedOnKeyArray = ({ source, baseArray = [], key }) =>
  baseArray.reduce(
    (output, item) => ({
      ...output,
      [item]: source[item][key] === item ? source[item] : undefined
    }),
    {}
  );
