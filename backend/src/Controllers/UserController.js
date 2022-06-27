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
  async update(request, response) {
    try {
      const { name, CNPJ, empress, contact, segment, email, admin } =
        request.body;
      const { id } = request.params;
      await db('User')
        .update({
          name,
          CNPJ,
          empress,
          contact,
          segment,
          email,
          admin,
        })
        .where({ id });
      return response.json('Update Ok');
    } catch {
      return response.status(400).json({ message: 'Erro na atualização' });
    }
  },
  async delete(request, response) {
    try {
      const { id } = request.params;
      await db('User').where({ id }).delete();
      return response.status(200).json({ message: 'Apagou' });
    } catch (error) {
      return response.status(400).json({ message: 'Erro na hora de deletar' });
    }
  },
};
