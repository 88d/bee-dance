import {bindable} from "aurelia-framework";
import{CardItem} from "./card-item";
export class Card {
    public title: string;
    public cardText: string;
    @bindable public item: CardItem;
    constructor() {
    }
    public cardClicked() {
        this.item.title = this.item.title+"!";
    }
}