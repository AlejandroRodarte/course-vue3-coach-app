import validateInput from './validate-input';
import updateFormMetadata from './update-form-metadata';

// validate form by checking all inputs;
// note: 'touched' metadata is not toggled here
const validateForm = (form, spec, metadata) => {
  for (const key in spec) {
    const hasStrategies = Object.prototype.hasOwnProperty.call(spec[key], 'strategies');
    // no strategies: we are in a nested object
    // run function again but one level deeper
    if (!hasStrategies) metadata.inputs[key] = {
      ...metadata.inputs[key],
      ...validateForm(form[key], spec[key], metadata.inputs[key])
    };
    // strategies exist: we can validate input and update input metadata
    else {
      const result = validateInput(form[key], spec[key]);
      metadata.inputs[key] = {
        ...metadata.inputs[key],
        ...result
      };
    }
  }
  // update form metadata (all form.isValid flags)
  updateFormMetadata(spec, metadata);
};

export default validateForm