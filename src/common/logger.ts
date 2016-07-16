import {LogManager} from "aurelia-framework";
import {Logger} from "aurelia-logging";

let appLogger: Logger = LogManager.getLogger("App");

/** Call this function to get an logger 
 * 
 * @param {string} name Provide a name for the logger
 * @return {Logger}
 */
function getLogger(name: String): Logger {
    return LogManager.getLogger(name);
}

export {
/**
 * Get a logger for the application level
 * @return {Logger}
 */
appLogger,
Logger,
getLogger
}
