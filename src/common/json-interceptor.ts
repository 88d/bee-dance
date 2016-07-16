import {Interceptor} from "aurelia-fetch-client";

export class JsonInterceptor implements Interceptor {
    public response(response) {
        return response.json();
    }
}
