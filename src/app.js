import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { PORT } from './config.js'

const app = express()

app.set('port', PORT)

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (_req, res) => res.json({
  name: 'auth-rest-api-express-prisma',
  description: 'Authentication REST API with express and prisma',
  version: '1.0.0'
}))

export default app
