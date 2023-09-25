"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLateInitializingQueue = void 0;
/**
 * Registers a queue that can be filled with data before it has actually been initialized with this function.
 * Before calling this function, `window[key]` can just be handled as an array of data.
 * When calling this funcation, all accumulated data will be passed to the callback.
 * After calling this function, `window[key]` will be an object with a `push` method that will call the callback with the data.
 */
function registerLateInitializingQueue(key, callback) {
    if (typeof window !== "undefined") {
        const previousData = window[key] || [];
        if (Array.isArray(previousData)) {
            window[key] = {
                push: (...data) => {
                    for (const value of data) {
                        callback(value);
                    }
                },
            };
            window[key].push(...previousData);
        }
    }
}
exports.registerLateInitializingQueue = registerLateInitializingQueue;
//# sourceMappingURL=lateInitializingQueue.js.map