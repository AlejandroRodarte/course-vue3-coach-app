// checks if string input is not empty
const stringRequired = (value, label) => {
  const isValid = value.trim().length > 0;
  return {
    isValid,
    message: isValid ? undefined : `${label} is required and should not be empty.`
  };
};

export default stringRequired;