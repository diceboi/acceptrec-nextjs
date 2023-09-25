"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextSSRInMemoryCache = void 0;
const client_1 = require("@apollo/client");
class NextSSRInMemoryCache extends client_1.InMemoryCache {
    constructor(config) {
        super(config);
        this.rehydrationContext = {
            incomingResults: [],
            uninitialized: true,
        };
    }
    write(options) {
        if (typeof window == "undefined") {
            this.rehydrationContext.incomingResults.push(options);
        }
        return super.write(options);
    }
    setRehydrationContext(rehydrationContext) {
        if (this.rehydrationContext.uninitialized) {
            rehydrationContext.incomingResults.push(...this.rehydrationContext.incomingResults);
        }
        this.rehydrationContext = rehydrationContext;
        this.rehydrationContext.uninitialized = false;
    }
}
exports.NextSSRInMemoryCache = NextSSRInMemoryCache;
//# sourceMappingURL=NextSSRInMemoryCache.js.map