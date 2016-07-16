import { CardItem } from "./card-item";
import { CardDataService } from "./card-data-service";
import { autoinject, bindable } from "aurelia-framework";

@autoinject
export class Overview {
    public items: CardItem[];

    constructor(private cardDataService: CardDataService) {
        this.items = [{id:"1", title:"title", description:"description"}];
    }

    /*private activate(): Promise<void> {
        return this.cardDataService.getAll()
            .then(previews => {
                this.items = previews;
                return previews;
            });
    }*/
}
