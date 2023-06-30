import { Router } from 'express'
import { validateSignUp, validateSignIn } from '../validations/auth.validations.js'
import { signUp, signIn, refreshToken, signOut } from '../controllers/auth.controller.js'

const router = Router()

router.post('/signup', validateSignUp, signUp)

router.post('/signin', validateSignIn, signIn)

router.post('/refresh-token', refreshToken)

router.post('/signout', signOut)

export default router
