import {Router} from "express";
import studentController from "../controller/studentController";

const productRouter = Router();
productRouter.get('/', studentController.findAll);
productRouter.post('/', studentController.add);
productRouter.delete('/:id', studentController.delete);
productRouter.put('/:id', studentController.update);
productRouter.get('/:id', studentController.findById);
productRouter.get('/:name', studentController.findByName);

export default productRouter;
