// checks if input is numeric
const isNumber = (value, label) => {
  const isValid = typeof value === 'number';
  return {
    isValid,
    message: isValid ? undefined : `${label} should be a number.`
  };
};

export default isNumber;