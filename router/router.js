import express from 'express'
import homeControl from '../controllers/homeControl.js';
import registroControl from '../controllers/registrar.js';
import {addSkaterControl, getSkaterControl} from '../controllers/skatersControl.js';
import loginControl from '../controllers/loginControl.js';

const router = express.Router()

router.get('/', getSkaterControl);
router.get('/registro',registroControl);
router.post('/skaters', addSkaterControl);
router.get('/login', loginControl);
//router.get('/skaters',getSkaterControl)


export default router