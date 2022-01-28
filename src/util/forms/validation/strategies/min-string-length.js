// checks if string length matches minimum criteria
const minNumber = (value, label, payload) => {
  const isValid = value.length >= payload.minLength;
  return {
    isValid,
    message: isValid ? undefined : `${label} should be of at least ${payload.minLength} characters.`
  };
};

export default minNumber;