import { ObjectID } from 'mongodb'
import { getDbConnection } from '../db'
import { jwt } from 'jsonwebtoken'

export const verifyEmailRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req;
        const db = getDbConnection(process.env.DB_NAME);
        const result = await db.collection('users').findOne({ verificationString });
        if (!result)
            return res.sendStatus(401).json({ message: 'The email verification code is incorrect' });

        const { _id: id, email, info } = result;

        await db.collection('users').updateOne(
            { _id: ObjectID(id) },
            {
                $set: { isVerified: true }
            });

        jwt.sign({ id, email, isVerified: true, info }, process.env.JWT_SECRET,{ expiresIn: '2d' },
            (err, token) => {
                if (err) res.sendStatus(500);
                res.sendStatus(200).json({ token })
            }
        )
    }
}