import db from '../database/connection';
export const ensureAdmin = async (request, response, next) => {
  const adminValid = await db('User')
    .select(['id', 'admin'])
    .first()
    .then((row) => row);
  console.log(adminValid);
  if (adminValid == 1) {
    next();
  } else {
    return response.status(401).json({ message: 'Não é admin' });
  }
};
