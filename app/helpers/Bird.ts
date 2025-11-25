import Fish from "./Fish";

export default class Bird extends Fish {
    setup(){
        this.upperLimit =this.p5.height*0.2;
        this.lowerLimit =this.p5.height*0.4;
    }
}