import { Router} from 'express'
import { addVerifier, getVerifierHash } from '../controllers/verifier.js'

const verifierRouter = Router()

verifierRouter.post('/addVerifier', addVerifier)
verifierRouter.post('/getVerifierHash', getVerifierHash)

export default verifierRouter