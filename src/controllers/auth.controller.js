import bcrypt from 'bcryptjs'

import db from '../database.js'
import { generateToken, generateRefreshToken, verifyRefreshToken, deleteRefreshToken } from '../services/jwt.service.js'

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = await db.user.findFirst({ where: { email } })
    if (user) {
      return res.status(400).json({
        message: 'Email already in use'
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    await db.user.create({
      data: { name, email, password: hash }
    })

    return res.status(201).json({
      message: 'User saved successfully',
      ok: true
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await db.user.findFirst({ where: { email } })
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({
        message: 'Incorrect password'
      })
    }

    const token = generateRefreshToken({ uid: user.id }, res)

    return res.json({
      message: 'User logged in successfully',
      ok: true,
      token
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const refreshToken = (req, res) => {
  try {
    const cookieToken = req.cookies.token

    if (!cookieToken) {
      return res.status(401).json({
        message: 'Token not found'
      })
    }

    const payload = verifyRefreshToken(cookieToken)

    delete payload.iat
    delete payload.exp

    const token = generateToken(payload)

    return res.json({
      message: 'Successfully generated token',
      ok: true,
      token
    })
  } catch (error) {
    return res.status(401).json({
      message: error.message
    })
  }
}

export const signOut = (_req, res) => {
  deleteRefreshToken(res)

  return res.json({
    message: 'User successfully logged out',
    ok: true
  })
}
