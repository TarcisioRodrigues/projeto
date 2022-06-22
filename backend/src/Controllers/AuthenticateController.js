import bcrypt from 'bcryptjs';
import * as Jwt from 'jsonwebtoken';
import db from '../database/connection';
export const AuthenticateController = {
  async store(request, response) {
    const { email, password } = request.body;
    const user = await db('User')
      .where({ email })
      .first()
      .then((row) => row);

    if (!user) {
      return response.sendStatus(401);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return response.sendStatus(401);
    }
    const token = Jwt.sign({ id: user.id }, 'secretasdawdawdwadwa', {
      expiresIn: '1d',
    });

    return response.json({
      user,
      token,
    });
  },
};
