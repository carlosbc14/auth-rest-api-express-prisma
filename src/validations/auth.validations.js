import { body } from 'express-validator'

import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateSignUp = [
  body('email', 'Email is invalid')
    .trim()
    .isEmail(),
  body('name', 'Name must be at least 2 characters')
    .trim()
    .isLength({ min: 2 }),
  body('password', 'Password must be at least 6 characters')
    .trim()
    .isLength({ min: 6 }),
  validationResultHandler
]

export const validateSignIn = [
  body('email', 'Email is invalid')
    .trim()
    .isEmail(),
  body('password', 'Password must be at least 6 characters')
    .trim()
    .isLength({ min: 6 }),
  validationResultHandler
]
