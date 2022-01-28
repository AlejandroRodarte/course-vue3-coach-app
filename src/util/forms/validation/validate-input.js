import strategies from './strategies';

// validate a single input against its spec
const validateInput = (value, spec) => {
  // loop through validations to run;
  // if any of them fails, terminate with error object
  for (const strategy of spec.strategies) {
    const result = strategies[strategy.type](value, spec.label, strategy.payload);
    if (!result.isValid) return result;
  }
  return {
    isValid: true,
    message: undefined
  };
};

export default validateInput;