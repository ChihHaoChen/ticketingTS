import express, { response } from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
	res.send('Hi, THERE!');
});

export { router as signoutRouter };