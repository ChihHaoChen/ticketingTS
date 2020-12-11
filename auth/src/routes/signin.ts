import express, { response } from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
	res.send('Hi, THERE!');
});

export { router as signinRouter };