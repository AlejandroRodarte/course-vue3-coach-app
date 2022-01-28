// check if form group is valid
const isFormValid = (metadata) => {
  // all .isValid (for primitive inputs)
  // and .form.isValid (for nested form groups)
  // should be valid for parent form group to be valid
  const isValid = Object.keys(metadata).every((key) => metadata[key].isValid || (metadata[key].form && metadata[key].form.isValid));
  return isValid;
};

export default isFormValid;