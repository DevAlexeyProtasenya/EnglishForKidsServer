import express, { Router } from 'express';
import UsersController from '../controllers/UsersController';

const router = Router();
const usersController = new UsersController();

router.get('/', usersController.get);
router.post('/', usersController.set);

export default router;