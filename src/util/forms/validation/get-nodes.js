// get form/spec/metadata nodes for a specific input
// example: access names.first
// form: form.value.names.first
// spec: spec.names.first
// metadata: metadata.value.inputs.names.inputs.first
const getNodes = (path, form, spec, metadata) => {
  const tail = path[path.length - 1];
  let formNode = form;
  let specNode = spec;
  let metadataNode = metadata;
  for (const [index, node] of path.entries()) {
    if (index < path.length - 1) {
      formNode = formNode[node];
      specNode = specNode[node];
      metadataNode = metadataNode[node].inputs;
    }
  }
  return {
    tail,
    nodes: {
      form: formNode[tail],
      spec: specNode[tail],
      metadata: metadataNode
    }
  };
};

export default getNodes;