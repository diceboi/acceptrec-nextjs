import { ApolloLink, Operation, NextLink, FetchResult } from "@apollo/client";
import { Observable } from "@apollo/client/utilities";
export interface AccumulateMultipartResponsesConfig {
    /**
     * The maximum delay in milliseconds
     * from receiving the first response
     * until the accumulated data will be flushed
     * and the connection will be closed.
     */
    cutoffDelay: number;
}
export declare class AccumulateMultipartResponsesLink extends ApolloLink {
    private maxDelay;
    constructor(config: AccumulateMultipartResponsesConfig);
    request(operation: Operation, forward?: NextLink): Observable<FetchResult>;
}
//# sourceMappingURL=AccumulateMultipartResponsesLink.d.ts.map