import Validator from 'fastest-validator'

import { formMessages } from './form-messages'

export const fv = new Validator({
  useNewCustomCheckerFunction: true,
  messages: formMessages,
})
