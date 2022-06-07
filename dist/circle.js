"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        this.radius = radius;
    }
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
exports.Circle = Circle;
