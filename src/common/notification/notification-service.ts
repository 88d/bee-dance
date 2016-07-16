import { EventAggregator } from "aurelia-event-aggregator";
import { NotificationMessage } from "./notification-message";
import { NotificationOptions } from "./notification-options";
import { autoinject } from "aurelia-framework";

@autoinject
export class NotificationService {
    constructor(private ea: EventAggregator) {
    }

    public notify(notification: NotificationMessage) {
        this.ea.publish(notification);
    }

    public info(text: string, options?: NotificationOptions) {
        let optionsToUse = Object.assign(new NotificationOptions(), options);
        let info = new NotificationMessage(text, "info", optionsToUse);
        this.notify(info);
    }

    public error(text: string, options?: NotificationOptions) {
        let optionsToUse = Object.assign(new NotificationOptions(), options);
        optionsToUse.timeout = 0;
        let error = new NotificationMessage(text, "error", optionsToUse);
        this.notify(error);
    }

    public success(text: string, options?: NotificationOptions) {
        let optionsToUse = Object.assign(new NotificationOptions(), options);
        let success = new NotificationMessage(text, "success", optionsToUse);
        this.notify(success);
    }
}
