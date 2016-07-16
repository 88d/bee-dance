import {getLogger} from "./logger";
import {HttpClient} from "aurelia-fetch-client";
import {NotificationService} from "./notification"
import {autoinject} from "aurelia-framework";

@autoinject
export class ApiClient extends HttpClient {
    private log = getLogger("api-client");
    constructor(private notificationService: NotificationService) {
        super();
        this.log.debug("ctor");
    }

    public getAll(url: string): Promise<any> {
        return this.fetch(url).catch(this.logAndThrow);
    }

    public get(url: string): Promise<any> {
        return this.fetch(url).catch(this.logAndThrow);
    }

    private logAndThrow(error: any) {
        this.log.error(error);
        this.notificationService.error(error);
        throw error;
    }
}
