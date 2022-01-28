// checks if input is a string
const isString = (value, label) => {
  const isValid = typeof value === 'string';
  return {
    isValid,
    message: isValid ? undefined : `${label} should be a string.`
  };
};

export default isString;