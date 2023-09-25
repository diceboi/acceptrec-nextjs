"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackgroundQuery = exports.useReadQuery = exports.useSuspenseQuery = exports.useQuery = exports.useFragment = void 0;
const client_1 = require("@apollo/client");
const useTransportValue_1 = require("./useTransportValue");
const RehydrationContext_1 = require("./RehydrationContext");
exports.useFragment = wrap(client_1.useFragment, [
    "data",
    "complete",
    "missing",
]);
exports.useQuery = wrap(typeof window === "undefined"
    ? (query, options) => (0, client_1.useQuery)(query, Object.assign(Object.assign({}, options), { fetchPolicy: "cache-only" }))
    : client_1.useQuery, ["data", "loading", "networkStatus", "called"]);
exports.useSuspenseQuery = wrap(client_1.useSuspenseQuery, [
    "data",
    "networkStatus",
]);
exports.useReadQuery = wrap(client_1.useReadQuery, ["data", "networkStatus"]);
const useBackgroundQuery = (...args) => {
    (0, RehydrationContext_1.useRehydrationContext)();
    return (0, client_1.useBackgroundQuery)(...args);
};
exports.useBackgroundQuery = useBackgroundQuery;
function wrap(useFn, transportKeys) {
    return ((...args) => {
        const result = useFn(...args);
        const transported = {};
        for (const key of transportKeys) {
            transported[key] = result[key];
        }
        return Object.assign(Object.assign({}, result), (0, useTransportValue_1.useTransportValue)(transported));
    });
}
//# sourceMappingURL=hooks.js.map