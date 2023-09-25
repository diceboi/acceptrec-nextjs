"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransportValue = void 0;
const react_1 = require("react");
const ApolloRehydrateSymbols_1 = require("./ApolloRehydrateSymbols");
const RehydrationContext_1 = require("./RehydrationContext");
/**
 * A hook that mostly acts as an identity function.
 * It will only behave differently during
 * the first render on the client, in which case it will
 * try to return the last value it was called with by
 * the same component during SSR. If that is successful,
 * it will schedule another rerender, to after hydration
 * the component can change to client-side values instead.
 */
function useTransportValue(value) {
    const id = (0, react_1.useId)();
    const [isClient, setIsClient] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => setIsClient(true), []);
    const rehydrationContext = (0, RehydrationContext_1.useRehydrationContext)();
    if (typeof window == "undefined") {
        if (rehydrationContext) {
            rehydrationContext.transportValueData[id] = value;
        }
    }
    else {
        const store = window[ApolloRehydrateSymbols_1.ApolloRehydrationCache];
        if (store) {
            if (isClient) {
                delete store[id];
            }
            if (id in store)
                value = store[id];
        }
    }
    return value;
}
exports.useTransportValue = useTransportValue;
//# sourceMappingURL=useTransportValue.js.map