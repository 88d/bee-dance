
export class Card {
    public title: string;
    public cardText: string;

    constructor() {
        this.SetCardText();
    }
    public cardClicked() {
        this.title = "clicked!!!"
    }
    private SetCardText() {
        this.title = "TestCard";
        this.cardText = "This is an new article. You must read this cool neu things.";
    }
}