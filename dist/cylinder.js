"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
const circle_1 = require("./circle");
class Cylinder extends circle_1.Circle {
    constructor(radius, color, height) {
        super(radius, color);
        this.height = height;
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(height) {
        this.height = height;
    }
    volum() {
        return Math.PI * this.height * super.getRadius * super.getRadius;
    }
}
exports.Cylinder = Cylinder;
