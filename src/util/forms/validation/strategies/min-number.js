// checks if numeric input is greater than a minimum threshold
const minNumber = (value, label, payload) => {
  const isValid = value >= payload.minValue;
  return {
    isValid,
    message: isValid ? undefined : `${label} should have a value of at least ${payload.minValue}.`
  };
};

export default minNumber;