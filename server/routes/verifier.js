import { Router} from 'express'
import { addVerifier, getVerifierHash, getVerifierName } from '../controllers/verifier.js'

const verifierRouter = Router()

verifierRouter.post('/addVerifier', addVerifier)
verifierRouter.post('/getVerifierHash', getVerifierHash)
verifierRouter.post('/getVerifierName', getVerifierName)

export default verifierRouter