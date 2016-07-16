import { CardItem } from "./card-item";
import { Router } from "aurelia-router";
import { autoinject, bindable } from "aurelia-framework"

@autoinject
export class List {
    @bindable public items: CardItem[];
    constructor(private router: Router) {

    }


    private navigateTo(item: CardItem) {
    }
}