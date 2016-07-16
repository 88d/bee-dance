import {LOADER_LOAD_START,LOADER_LOAD_STOP} from "./constants";
import {EventAggregator} from "aurelia-event-aggregator";
import {autoinject} from "aurelia-framework";
export {LoaderService} from "./service";
export {LoaderInterceptor} from "./interceptor"

@autoinject
export class Loader {
    private isLoading: boolean = false;

    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe(LOADER_LOAD_START, () => {
            this.isLoading = true;
        });
        this.eventAggregator.subscribe(LOADER_LOAD_STOP, () => {
            this.isLoading = false;
        });
    }
}
