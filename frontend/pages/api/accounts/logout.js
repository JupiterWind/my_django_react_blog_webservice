import axios from 'axios';
import cookie from 'cookie';
import Api from '../../../src/service/Api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../src/config';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const response = await Api.post('/api/accounts/logout/');

      if (response.status === 200) {
        res.setHeader('Set-Cookie', [
          cookie.serialize(ACCESS_TOKEN, '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            expires: new Date(0),
            sameSite: 'strict',
            path: '/api/',
          }),
          cookie.serialize(REFRESH_TOKEN, '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            expires: new Date(0),
            sameSite: 'strict',
            path: '/api/',
          }),
        ]);

        return res.status(200).json({
          message: 'Successfully logged out',
        });
      } else {
        return res.status(response.status).json({
          message: 'Authentication failed',
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: 'Something went wrong when authenticating',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ message: `Method ${req.method} now allowed` });
  }
};
