"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDataTransport = exports.transportDataToJS = void 0;
const superjson_1 = __importDefault(require("superjson"));
const ApolloRehydrateSymbols_1 = require("./ApolloRehydrateSymbols");
const lateInitializingQueue_1 = require("./lateInitializingQueue");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
/**
 * Returns a string of JavaScript that can be used to transport data to the client.
 */
function transportDataToJS(data) {
    const key = Symbol.keyFor(ApolloRehydrateSymbols_1.ApolloSSRDataTransport);
    return `(window[Symbol.for("${key}")] ??= []).push(${superjson_1.default.stringify(data)})`;
}
exports.transportDataToJS = transportDataToJS;
/**
 * Registers a lazy queue that will be filled with data by `transportDataToJS`.
 * All incoming data will be added either to the rehydration cache or the result cache.
 */
function registerDataTransport() {
    (0, lateInitializingQueue_1.registerLateInitializingQueue)(ApolloRehydrateSymbols_1.ApolloSSRDataTransport, (data) => {
        var _a, _b, _c;
        const parsed = superjson_1.default.deserialize(data);
        ts_invariant_1.default.debug(`received data from the server:`, parsed);
        Object.assign(((_a = window[ApolloRehydrateSymbols_1.ApolloRehydrationCache]) !== null && _a !== void 0 ? _a : (window[ApolloRehydrateSymbols_1.ApolloRehydrationCache] = {})), parsed.rehydrate);
        ((_b = window[ApolloRehydrateSymbols_1.ApolloBackgroundQueryTransport]) !== null && _b !== void 0 ? _b : (window[ApolloRehydrateSymbols_1.ApolloBackgroundQueryTransport] = [])).push(...parsed.backgroundQueries);
        ((_c = window[ApolloRehydrateSymbols_1.ApolloResultCache]) !== null && _c !== void 0 ? _c : (window[ApolloRehydrateSymbols_1.ApolloResultCache] = [])).push(...parsed.results);
    });
}
exports.registerDataTransport = registerDataTransport;
//# sourceMappingURL=dataTransport.js.map