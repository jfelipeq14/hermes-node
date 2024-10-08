import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()

  const authController = new AuthController({ authModel })

  authRouter.post('/login', authController.login)
  authRouter.post('/register', authController.register)
  authRouter.post('/logout', authController.logout)

  return authRouter
}
