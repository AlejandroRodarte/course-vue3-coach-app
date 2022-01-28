const spec = {
  names: {
    first: {
      label: 'First Name',
      strategies: [
        {
          type: 'is-string'
        },
        {
          type: 'string-required'
        }
      ]
    },
    last: {
      label: 'Last Name',
      strategies: [
        {
          type: 'is-string'
        },
        {
          type: 'string-required'
        }
      ]
    }
  },
  description: {
    label: 'Description',
    strategies: [
      {
        type: 'is-string'
      },
      {
        type: 'string-required'
      }
    ]
  },
  rate: {
    label: 'Hourly Rate',
    strategies: [
      {
        type: 'is-number'
      },
      {
        type: 'min-number',
        payload: {
          minValue: 1
        }
      }
    ]
  },
  areas: {
    label: 'Expertise Areas',
    strategies: [
      {
        type: 'is-array'
      },
      {
        type: 'min-array-length',
        payload: {
          minLength: 1
        }
      }
    ]
  }
};

export default spec;