import {Interceptor}  from "aurelia-fetch-client";
import {LoaderService} from "./service";
import {autoinject} from "aurelia-framework";

@autoinject
export class LoaderInterceptor implements Interceptor {
    constructor(private loaderService: LoaderService) {

    }

    public request(req: Request) {
        this.loaderService.start();
        return req;
    }

    public response(res: Response) {
        this.loaderService.stop();
        return res;
    }
}