import isFormValid from './is-form-valid';

// update all form.isValid flags
const updateFormMetadata = (spec, metadata) => {
  for (const key in spec) {
    const hasStrategies = Object.prototype.hasOwnProperty.call(spec[key], 'strategies');
    // no strategies: we are at a form group; run one level deeper into the object
    if (!hasStrategies) updateFormMetadata(spec[key], metadata.inputs[key]);
    else {
      // strategies are found: we are at a specific input spec; update respective
      // form.isValid flag for that group and terminate
      // (only needs to run once per form group)
      metadata.form.isValid = isFormValid(metadata.inputs);
      break;
    }
  }
};

export default updateFormMetadata;