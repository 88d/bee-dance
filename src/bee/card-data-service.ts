import {HttpClient} from "aurelia-fetch-client";
import {CardItem} from "./card-item";
import {autoinject} from "aurelia-framework";

@autoinject
export class CardDataService {
    public constructor(private http: HttpClient) {
    }

    public getAll(): Promise<CardItem[]> {
        return this.http.fetch("/sample-data/cards.json")
            .then(data => {
                return data.json();
            });
    }
}