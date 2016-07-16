export class NotificationOptions {
    public translate: boolean = false;
    public timeout: number = 5000;
    public transitionClass: string = "animate";
    public onTransitionEnd: Function;
    public onClose: Function;
}
