// generate form metadata
const generateFormMetadata = (spec) => {
  // form: for form group-related data
  // inputs: for input-related data for this form group
  const metadata = {
    form: {
      isValid: false
    },
    inputs: {}
  };
  for (const key in spec) {
    const hasStrategies = Object.prototype.hasOwnProperty.call(spec[key], 'strategies');
    // nested form group found: re-run this function one level deeper into the spec
    if (!hasStrategies) metadata.inputs[key] = generateFormMetadata(spec[key]);
    // primitive input found: set metadata values
    else metadata.inputs[key] = {
      isValid: false,
      message: undefined,
      touched: false
    };
  }
  return metadata;
};

export default generateFormMetadata;