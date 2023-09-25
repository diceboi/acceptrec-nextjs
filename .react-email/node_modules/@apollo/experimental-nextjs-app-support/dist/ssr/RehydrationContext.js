"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRehydrationContext = exports.RehydrationContextProvider = void 0;
const client_1 = require("@apollo/client");
const react_1 = __importDefault(require("react"));
const NextSSRInMemoryCache_1 = require("./NextSSRInMemoryCache");
const navigation_1 = require("next/navigation");
const dataTransport_1 = require("./dataTransport");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const NextSSRApolloClient_1 = require("./NextSSRApolloClient");
const ApolloRehydrationContext = react_1.default.createContext(undefined);
const RehydrationContextProvider = ({ children, }) => {
    const client = (0, client_1.useApolloClient)();
    const rehydrationContext = react_1.default.useRef();
    if (typeof window == "undefined") {
        if (!rehydrationContext.current) {
            rehydrationContext.current = buildApolloRehydrationContext();
        }
        if (client instanceof NextSSRApolloClient_1.NextSSRApolloClient) {
            client.setRehydrationContext(rehydrationContext.current);
        }
        else {
            throw new Error("When using Next SSR, you must use the `NextSSRApolloClient`");
        }
        if (client.cache instanceof NextSSRInMemoryCache_1.NextSSRInMemoryCache) {
            client.cache.setRehydrationContext(rehydrationContext.current);
        }
        else {
            throw new Error("When using Next SSR, you must use the `NextSSRInMemoryCache`");
        }
    }
    else {
        (0, dataTransport_1.registerDataTransport)();
    }
    return (react_1.default.createElement(ApolloRehydrationContext.Provider, { value: rehydrationContext.current }, children));
};
exports.RehydrationContextProvider = RehydrationContextProvider;
function useRehydrationContext() {
    const rehydrationContext = react_1.default.useContext(ApolloRehydrationContext);
    const insertHtml = react_1.default.useContext(navigation_1.ServerInsertedHTMLContext);
    // help transpilers to omit this code in bundling
    if (typeof window !== "undefined")
        return;
    if (insertHtml &&
        rehydrationContext &&
        !rehydrationContext.currentlyInjected) {
        rehydrationContext.currentlyInjected = true;
        insertHtml(() => react_1.default.createElement(rehydrationContext.RehydrateOnClient, null));
    }
    return rehydrationContext;
}
exports.useRehydrationContext = useRehydrationContext;
function buildApolloRehydrationContext() {
    const rehydrationContext = {
        currentlyInjected: false,
        transportValueData: {},
        transportedValues: {},
        incomingResults: [],
        incomingBackgroundQueries: [],
        RehydrateOnClient() {
            rehydrationContext.currentlyInjected = false;
            if (!Object.keys(rehydrationContext.transportValueData).length &&
                !Object.keys(rehydrationContext.incomingResults).length &&
                !Object.keys(rehydrationContext.incomingBackgroundQueries).length)
                return react_1.default.createElement(react_1.default.Fragment, null);
            ts_invariant_1.default.debug("transporting data", rehydrationContext.transportValueData);
            ts_invariant_1.default.debug("transporting results", rehydrationContext.incomingResults);
            ts_invariant_1.default.debug("transporting incomingBackgroundQueries", rehydrationContext.incomingBackgroundQueries);
            const __html = (0, dataTransport_1.transportDataToJS)({
                rehydrate: Object.fromEntries(Object.entries(rehydrationContext.transportValueData).filter(([key, value]) => rehydrationContext.transportedValues[key] !== value)),
                results: rehydrationContext.incomingResults,
                backgroundQueries: rehydrationContext.incomingBackgroundQueries,
            });
            Object.assign(rehydrationContext.transportedValues, rehydrationContext.transportValueData);
            rehydrationContext.transportValueData = {};
            rehydrationContext.incomingResults = [];
            rehydrationContext.incomingBackgroundQueries = [];
            return (react_1.default.createElement("script", { dangerouslySetInnerHTML: {
                    __html,
                } }));
        },
    };
    return rehydrationContext;
}
//# sourceMappingURL=RehydrationContext.js.map