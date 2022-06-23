import jwt from 'jsonwebtoken';
export const ensureAuthenticate = (request, response, Next) => {
  const authHeader = request.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return response.status(401).json({ message: 'Não tem' });
  }

  try {
    const secret = 'Tarcisio';
    console.log(secret);
    jwt.verify(token, secret);
    Next();
  } catch (error) {
    response.status(400).json({ message: 'Não permitido' });
  }
};
