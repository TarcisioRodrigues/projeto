import db from '../database/connection';
export const FileController={
  async store (request,response){
    const {originalname:name,filename:path}=request.file;
    const file=await db('File').insert({
      name,
      path,
    })
    return response.json(file);
   }
}