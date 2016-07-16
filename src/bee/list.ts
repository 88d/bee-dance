import { CardItem } from "./card-item";
import { Router } from "aurelia-router";
import { autoinject, bindable } from "aurelia-framework"

@autoinject
export class List {
    public items: CardItem[];
    constructor(private router: Router) {
        this.items = [{ id: "1", title: "title", description: "description" }];

    }


    private navigateTo(item: CardItem) {
    }
}