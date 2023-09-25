import { ApolloLink } from "@apollo/client";
interface SSRMultipartLinkConfig {
    /**
     * Whether to strip fragments with `@defer` directives
     * from queries before sending them to the server.
     *
     * Defaults to `true`.
     *
     * Can be overwritten by adding a label starting
     * with either `"SsrDontStrip"` or `"SsrStrip"` to the
     * directive.
     */
    stripDefer?: boolean;
    /**
     * The maximum delay in milliseconds
     * from receiving the first response
     * until the accumulated data will be flushed
     * and the connection will be closed.
     *
     * Defaults to `0`.
     */
    cutoffDelay?: number;
}
export declare class SSRMultipartLink extends ApolloLink {
    constructor(config?: SSRMultipartLinkConfig);
}
export {};
//# sourceMappingURL=SSRMultipartLink.d.ts.map