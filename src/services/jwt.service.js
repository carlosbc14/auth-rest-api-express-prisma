import jwt from 'jsonwebtoken'

import { MODE, JWT_SECRET, JWT_REFRESH } from '../config.js'

export const generateToken = (payload) => {
  const expiresIn = 60 * 15

  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

export const generateRefreshToken = (payload, res) => {
  const expiresIn = 60 * 60 * 24 * 30

  const token = jwt.sign(payload, JWT_REFRESH, { expiresIn })

  res.cookie('token', token, {
    httpOnly: true,
    secure: (MODE === 'production'),
    expires: new Date(Date.now() + expiresIn * 1000)
  })

  return token
}

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH)
}

export const deleteRefreshToken = (res) => {
  return res.clearCookie('token')
}
