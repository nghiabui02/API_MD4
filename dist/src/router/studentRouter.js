"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controller/studentController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', studentController_1.default.findAll);
productRouter.post('/', studentController_1.default.add);
productRouter.delete('/:id', studentController_1.default.delete);
productRouter.put('/:id', studentController_1.default.update);
productRouter.get('/:id', studentController_1.default.findById);
productRouter.get('/:name', studentController_1.default.findByName);
exports.default = productRouter;
//# sourceMappingURL=studentRouter.js.map