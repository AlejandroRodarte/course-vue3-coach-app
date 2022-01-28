import isArray from './is-array';
import isEmail from './is-email';
import isNumber from './is-number';
import isString from './is-string';
import minArrayLength from './min-array-length';
import minNumber from './min-number';
import minStringLength from './min-string-length';
import stringRequired from './string-required';

// map strategy types ('is-array', 'min-number')
// declared in spec to related validator functions
const strategies = {
  'is-array': isArray,
  'is-email': isEmail,
  'is-number': isNumber,
  'is-string': isString,
  'min-array-length': minArrayLength,
  'min-number': minNumber,
  'min-string-length': minStringLength,
  'string-required': stringRequired
};

export default strategies;
