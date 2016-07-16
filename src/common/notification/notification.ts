import { inject } from "aurelia-framework";
import { bindable } from "aurelia-framework";
import { NotificationMessage } from "./index";

@inject(Element)
export class Notification {
    @bindable public item: NotificationMessage;
    public timeout: number;

    constructor(private element: Element) {
    }

    public attached() {
        if (this.item !== undefined) {
            this.element.classList.add(this.item.options.transitionClass);
            if (this.item.options.timeout !== 0) {
                this.timeout = setTimeout(() => {
                    this.close();
                }, this.item.options.timeout);
            }
        }
    }

    public onTransitionEnd(handler: Function) {
        handler();
    }

    public close() {
        clearTimeout(this.timeout)
        this.element.classList.remove(this.item.options.transitionClass);
        this.element.addEventListener("transitionend", this.transitionEnd(this.item), false)
    }

    private transitionEnd(item: NotificationMessage): EventListener {
        return (event) => {
            if (item !== undefined && item.options.onClose !== undefined) {
                item.options.onClose(item);
            }
            event.srcElement.removeEventListener("transitionend", this.transitionEnd(item), false);
            event.srcElement.remove();
        }
    }
}

