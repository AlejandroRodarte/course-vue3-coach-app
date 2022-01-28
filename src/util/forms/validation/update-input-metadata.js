import getNodes from './get-nodes';
import validateInput from './validate-input';

// update input metadata (when input changes)
const updateInputMetadata = (path, form, spec, metadata) => {
  // access input data on...
  // form: actual value
  // spec: validators
  // metadata: isValid, touched and message
  const { tail, nodes } = getNodes(path, form, spec, metadata.inputs);
  // validate input, update its metadata and paint as touched
  const result = validateInput(nodes.form, nodes.spec);
  nodes.metadata[tail] = {
    ...result,
    touched: true
  };
}

export default updateInputMetadata;