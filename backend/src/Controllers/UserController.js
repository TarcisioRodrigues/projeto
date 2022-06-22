import db from '../database/connection';
import bcrypt from 'bcryptjs';
export const UserController = {
  async create(request, response) {
    const {
      id,
      name,
      CNPJ,
      empress,
      contact,
      segment,
      email,
      admin,
      password,
    } = request.body;
    const passwordHash = bcrypt.hashSync(password, 8);

    try {
      const userExists = await db('User')
        .where({ email })
        .first()
        .then((row) => row);

      if (userExists) {
        return response.sendStatus(409);
      }
      const user = await db('User').insert({
        id,
        name,
        CNPJ,
        empress,
        contact,
        segment,
        email,
        admin,
        password: passwordHash,
      });
      return response.json(passwordHash);
    } catch (err) {
      console.log(err);
    }
  },
  async index(request, response) {
    const user = await db('User').select('*');
    return response.json(user);
  },
};
