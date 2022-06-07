export class Circle{
    private radius: number;
    private color: string;
    constructor(radius: number, color: string){
        this.radius = radius;
        this.color = color;
    }
    public get getRadius(): number{
        return this.radius;
    }
    public set setRadius(radius: number){
        this.radius = radius;
    }
    public get getColor(): string{
        return this.color;
    }
    public set setColor(color: string){
        this.color = color;
    }
    public getArea(): number{
        return this.radius * this.radius * Math.PI
    }
}