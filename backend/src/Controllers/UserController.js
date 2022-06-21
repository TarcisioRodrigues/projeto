import db from '../database/connection'
export const  UserController={
    async create(request,response){
        const{name,CNPJ, empress, contact, segment, email, admin,password}=request.body
      const user=await db('user').insert({
            id,
            name,
            CNPJ,
            empress,
            contact,
            segment,
            email,
            admin,
            password
            
        })
        return response.json(user)
    }
   
}
