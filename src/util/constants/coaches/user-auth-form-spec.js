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
  password: {
    label: 'Password',
    strategies: [
      {
        type: 'is-string'
      },
      {
        type: 'string-required'
      },
      {
        type: 'min-string-length',
        payload: {
          minLength: 8
        }
      }
    ]
  }
};

export default spec;