const spec = {
  email: {
    label: 'Email',
    strategies: [
      {
        type: 'is-string'
      },
      {
        type: 'string-required'
      },
      {
        type: 'is-email'
      }
    ]
  },
  message: {
    label: 'Message',
    strategies: [
      {
        type: 'is-string'
      },
      {
        type: 'string-required'
      }
    ]
  }
};

export default spec;