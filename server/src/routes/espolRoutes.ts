import { Router } from 'express';
import  espolControllers  from '../controllers/espolControllers';

class EspolRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', espolControllers.list);
        this.router.get('/:id', espolControllers.getOne);
        this.router.post('/', espolControllers.create);
        this.router.put('/:id', espolControllers.update);
    } 
}

const espolRoutes = new EspolRoutes();
export default espolRoutes.router;