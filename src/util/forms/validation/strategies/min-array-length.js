// checks if array input has a minimum length
const minArrayLength = (value, label, payload) => {
  const isValid = value.length >= payload.minLength;
  return {
    isValid,
    message: isValid ? undefined : `You should have at least ${payload.minLength} ${label}.`
  };
};

export default minArrayLength;