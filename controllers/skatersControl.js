import path from 'path';
import {addSkaterQuery,getSkatersQuery} from '../queries/consultaSkater.js';
const __dirname = path.resolve();

const addSkaterControl = async (req,res)=>{
    const {email,nombre,password,anos_experiencia,especialidad} = req.body;
    const skater = {email,nombre,password,anos_experiencia,especialidad};
    const {files} = req;
    const { foto } = files;
    const { name } = foto;
    const pathPhoto = `/img/${name}`;
    foto.mv(`${__dirname}/public${pathPhoto}`, async (err) => {
        try {
            if (err) throw err;
            skater.foto = pathPhoto;
            await addSkaterQuery(skater);
            res.status(201).redirect('/login')
        } catch (error) {
            res.status(500).send(error.message)
        }
    })
}

const getSkaterControl = async (req,res)=>{
    const skaters = await getSkatersQuery();
    res.render('Home',{skaters})
    
}

export {addSkaterControl, getSkaterControl};