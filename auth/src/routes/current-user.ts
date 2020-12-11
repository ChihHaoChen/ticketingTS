import express, { response } from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
	res.send('Hi, THERE!');
});

export { router as currentUserRouter };