import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import { PORT } from './config.js'
import authRouter from './routes/auth.routes.js'

const app = express()

app.set('port', PORT)

app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())

app.get('/', (_req, res) => res.json({
  name: 'auth-rest-api-express-prisma',
  description: 'Authentication REST API with express and prisma',
  version: '1.0.0'
}))
app.use('/api/auth', authRouter)

export default app
