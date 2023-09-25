import { SuperJSONResult } from "superjson/dist/types";
import { RehydrationCache, ResultsCache, BackgroundQueriesCache } from "./types";
import type { DataTransport } from "./dataTransport";
declare global {
    interface Window {
        [ApolloRehydrationCache]?: RehydrationCache;
        [ApolloResultCache]?: ResultsCache;
        [ApolloSSRDataTransport]?: DataTransport<SuperJSONResult>;
        [ApolloBackgroundQueryTransport]?: BackgroundQueriesCache;
    }
}
export declare const ApolloRehydrationCache: unique symbol;
export declare const ApolloResultCache: unique symbol;
export declare const ApolloSSRDataTransport: unique symbol;
export declare const ApolloBackgroundQueryTransport: unique symbol;
//# sourceMappingURL=ApolloRehydrateSymbols.d.ts.map