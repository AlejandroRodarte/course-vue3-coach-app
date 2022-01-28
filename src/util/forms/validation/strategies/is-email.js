// checks if input is an email
const isEmail = (value, label) => {
  const isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value.toLowerCase());
  return {
    isValid,
    message: isValid ? undefined : `${label} should be an email.`
  };
};

export default isEmail;