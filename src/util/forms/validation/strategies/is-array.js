// checks if input represents an array
const isArray = (value, label) => {
  const isValid = Array.isArray(value);
  return {
    isValid,
    message: isValid ? undefined : `${label} should be an array.`
  };
};

export default isArray;