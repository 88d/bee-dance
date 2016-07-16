import {bindable} from "aurelia-framework";
export class Card {
    public title: string;
    public cardText: string;
    
    constructor() {
        this.SetCardText();
    }
    public cardClicked() {
    }
    private SetCardText() {
    }
}