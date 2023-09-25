import { ApolloLink, Operation, NextLink } from "@apollo/client";
import { Observable } from "@apollo/client/utilities";
interface RemoveMultipartDirectivesConfig {
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
}
/**
 * This link is used to strip directives from the query before it is sent to the server.
 * This is used to prevent the server from doing additional work in SSR scenarios where multipart responses cannot be handled anyways.
 * This stripping behaviour can be configured per-directive.
 * It be overridden by adding a label to the directive.
 * In the case this link is configured to strip a directive, but the directive has a label starting with "SsrDontStrip", the directive will not be stripped.
 * In the case this link is configured to not strip a directive, but the directive has a label starting with "SsrStrip", the directive will be stripped.
 * The "starting with" is important, because labels have to be unique per operation. So if you have multiple directives where you want to override the default stipping behaviour,
 * you can do this by annotating them like
 * ```gql
 * query myQuery {
 *   fastField
 *   ... @defer(label: "SsrDontStrip1") {
 *     slowField1
 *   }
 *   ... @defer(label: "SsrDontStrip2") {
 *     slowField2
 *   }
 * }
 * ```
 *
 */
export declare class RemoveMultipartDirectivesLink extends ApolloLink {
    private stripDirectives;
    constructor(config: RemoveMultipartDirectivesConfig);
    request(operation: Operation, forward?: NextLink): Observable<{}>;
}
export {};
//# sourceMappingURL=RemoveMultipartDirectivesLink.d.ts.map