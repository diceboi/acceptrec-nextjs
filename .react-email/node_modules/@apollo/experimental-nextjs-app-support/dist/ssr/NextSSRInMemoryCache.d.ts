import { InMemoryCache, InMemoryCacheConfig, Cache, Reference } from "@apollo/client";
import { RehydrationContextValue } from "./types";
export declare class NextSSRInMemoryCache extends InMemoryCache {
    private rehydrationContext;
    constructor(config?: InMemoryCacheConfig);
    write(options: Cache.WriteOptions<any, any>): Reference | undefined;
    setRehydrationContext(rehydrationContext: RehydrationContextValue): void;
}
//# sourceMappingURL=NextSSRInMemoryCache.d.ts.map