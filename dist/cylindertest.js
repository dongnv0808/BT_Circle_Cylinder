"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cylinder_1 = require("./cylinder");
let cylinder = new cylinder_1.Cylinder(3, "Red", 6);
console.log(cylinder);
console.log(`Voloum Cylinder = ${cylinder.volum()}`);
