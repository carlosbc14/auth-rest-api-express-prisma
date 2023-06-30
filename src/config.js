import { config } from 'dotenv'

config()

export const MODE = process.env.MODE || 'development'
export const PORT = process.env.PORT || 5000
export const JWT_SECRET = process.env.JWT_SECRET || ''
export const JWT_REFRESH = process.env.JWT_REFRESH || ''
