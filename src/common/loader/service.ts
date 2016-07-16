import {LOADER_LOAD_START, LOADER_LOAD_STOP} from "./constants";
import {EventAggregator} from "aurelia-event-aggregator";
import {autoinject} from "aurelia-framework";

@autoinject
export class LoaderService {
    constructor(private eventAggregator: EventAggregator) {
    }

    public start() {
        this.eventAggregator.publish(LOADER_LOAD_START);
    }

    public stop() {
        this.eventAggregator.publish(LOADER_LOAD_STOP);
    }
}
