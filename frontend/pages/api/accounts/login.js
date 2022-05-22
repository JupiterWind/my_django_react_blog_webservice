import cookie from 'cookie';
import Api from '../../../src/service/Api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../src/config';

export default async (req, res) => {
  if (req.method === 'POST') {
    const loginData = req.body;

    try {
      const response = await Api.post('/api/accounts/login/', loginData);

      if (response.status === 200) {
        const { user, access_token, refresh_token } = response.data;
        res.setHeader('Set-Cookie', [
          cookie.serialize(ACCESS_TOKEN, access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 30,
            sameSite: 'strict',
            path: '/api/',
          }),
          cookie.serialize(REFRESH_TOKEN, refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 30,
            sameSite: 'strict',
            path: '/api/',
          }),
        ]);
        return res.status(200).json({ user: user });
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
