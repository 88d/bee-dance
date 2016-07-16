import { NotificationOptions} from "./notification-options";

export class NotificationMessage {
    constructor(
        public text: string,
        public type?: string,
        public options?: NotificationOptions) {
        if (type === undefined) {
            this.type = "info";
        }
        if (options === undefined) {
            this.options = new NotificationOptions()
        }
    }
}