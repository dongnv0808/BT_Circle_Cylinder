import { Circle } from "./circle";

export class Cylinder extends Circle{
    private height: number;
    constructor(radius: number, color: string, height: number){
        super(radius, color);
        this.height = height;
    }
    public get getHeight(): number{
        return this.height;
    }
    public set setHeight(height:number){
        this.height = height;
    }
    public volum(): number{
        return Math.PI * this.height * super.getRadius * super.getRadius ; 
    }
}