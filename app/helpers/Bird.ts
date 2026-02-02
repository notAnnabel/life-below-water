import Animal from "./Fish";


export default class Bird extends Animal {
    setup(){
        // Changes the height at which the bird flies
        this.upperLimit =this.p5.height*0.2;
        this.lowerLimit =this.p5.height*0.4;
    }
}