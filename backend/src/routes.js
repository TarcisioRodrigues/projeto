import { Router } from 'express';
import db from '../src/database/connection';
import { ensureAuthenticate } from '../src/middlewares/ensureAuthenticate';
import fs from 'fs'
import multer from 'multer';
import multerConfig from './config/multer';
import pdfPrinter from 'pdfmake'
import { UserController } from './Controllers/UserController';
import { AuthenticateController } from './Controllers/AuthenticateController';
import { FileController } from './Controllers/FileController';
const upload = multer(multerConfig);
const routes = Router();

routes.post('/user', UserController.create);
routes.post('/auth', AuthenticateController.store);

// routes.use(ensureAuthenticate);
routes.get('/index', UserController.index);
routes.post('/files', upload.single('file'), FileController.store);
routes.put('/update/:id', UserController.update);
routes.delete('/delete/:id', UserController.delete);
//gerando relatorio
routes.get('/product/reports',async(request,response)=>{
  const user = await db('User').select('*');
  var fonts = {
    Times: {
      normal: 'Times-Roman',
      bold: 'Times-Bold',
      italics: 'Times-Italic',
      bolditalics: 'Times-BoldItalic'
    }

  };
  const printer=new pdfPrinter(fonts)
  const body=[]
  for await (let product of user){
    const rows=new Array()
     rows.push(product.id)
     rows.push(product.name)
     rows.push(product.cnpj)
     rows.push(product.empress)
     rows.push(product.contact)
     rows.push(product.segment)
     rows.push(product.email)
    body.push(rows)
  }
  console.log(body)
  const docDefinitions={
    defaultStyle:{font:'Times'},
    content:[
      {
        table:{
          body:[['id','name','cnpj','empress','contact','segment','email'],...body],
          
        }
      }
    ],
  }
  const pdfDoc=printer.createPdfKitDocument(docDefinitions)
  // pdfDoc.pipe(fs.createWriteStream("Relatorio.pdf"))
  const chunks=[]
  pdfDoc.on("data",(chunk)=>{
    //Pegando pedaços e inserindo dentro do array
    chunks.push(chunk)
  })
  pdfDoc.end()

  pdfDoc.on('end',()=>{
    const result=Buffer.concat(chunks)
    response.end(result)
  })
  
})

export { routes };
