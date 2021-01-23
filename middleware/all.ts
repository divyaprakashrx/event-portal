import nc from 'next-connect'
import auth from './auth'

const middleware = nc()

middleware.use(auth)
export default middleware
