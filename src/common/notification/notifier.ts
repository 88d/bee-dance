import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { NotificationMessage } from "./index";
import { autoinject } from "aurelia-framework";

@autoinject
export class Notifier {
    public queue: NotificationMessage[];
    public addItemSubscription: Subscription;

    constructor(private ea: EventAggregator) {
        this.queue = [];
        this.addItemSubscription = this.ea.subscribe(NotificationMessage, this.addNotificationMessage(this));
    }

    public detached() {
        this.addItemSubscription.dispose();
    }

    private addNotificationMessage(notifier: Notifier): Function {
        return (notification: NotificationMessage) => {
            notification.options.onClose = (item) => {
                notifier.removeNotificationMessage(item);
            };
            notifier.queue.push(notification);
        };
    }

    private removeNotificationMessage(notification: NotificationMessage) {
        this.queue.splice(this.queue.indexOf(notification), 1);
    }
}
