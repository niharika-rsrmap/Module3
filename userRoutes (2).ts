import { Router, Request, Response, NextFunction } from 'express';
import { registerUser, loginUser, getUserById, getAllUsers } from '../controllers/userController';

const router = Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  registerUser(req, res).catch(next);
});
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  loginUser(req, res).catch(next);
});
router.get('/user/:id', (req: Request, res: Response, next: NextFunction) => {
  getUserById(req, res).catch(next);
});
router.get('/users', (req: Request, res: Response, next: NextFunction) => {
  getAllUsers(req, res).catch(next);
});

export default router;