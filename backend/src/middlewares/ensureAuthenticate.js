import jwt from 'jsonwebtoken';
export const ensureAuthenticate = (request, response, Next) => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.sendStatus(401);
  }

  const token = authorization.replace('Bearer', ' ').trim();

  try {
    const data = jwt.verify(token, 'secret');
    console.log(data);
    const { id } = data;

    request.userId = id;
    return Next();
  } catch (error) {
    return response.sendStatus(401);
  }
};
