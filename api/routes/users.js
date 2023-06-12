import express from 'express'
import { bestCond, distclasseqtd, getUsers, mediaNordeste, qtdpessoasresiduos, totalporregiao } from '../controllers/user.js'

const router = express.Router()

router.get("/", getUsers);
router.get("/mediane", mediaNordeste)
router.get("/totalporregiao", totalporregiao)
router.get("/qtdpessoasresiduos", qtdpessoasresiduos)
router.get("/distclasseqtd", distclasseqtd)
router.get("/bestcond", bestCond)

export default router

