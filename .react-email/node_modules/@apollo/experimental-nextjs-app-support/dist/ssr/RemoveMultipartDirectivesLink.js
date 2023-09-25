"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveMultipartDirectivesLink = void 0;
const client_1 = require("@apollo/client");
const utilities_1 = require("@apollo/client/utilities");
function getDirectiveArgumentValue(directive, argument) {
    var _a, _b;
    return (_b = (_a = directive.arguments) === null || _a === void 0 ? void 0 : _a.find((arg) => arg.name.value === argument)) === null || _b === void 0 ? void 0 : _b.value;
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
class RemoveMultipartDirectivesLink extends client_1.ApolloLink {
    constructor(config) {
        super();
        this.stripDirectives = [];
        if (config.stripDefer !== false)
            this.stripDirectives.push("defer");
    }
    request(operation, forward) {
        if (!forward) {
            throw new Error("This is not a terminal link!");
        }
        const { query } = operation;
        let modifiedQuery = query;
        modifiedQuery = (0, utilities_1.removeDirectivesFromDocument)(this.stripDirectives
            .map((directive) => ({
            test(node) {
                let shouldStrip = node.kind === "Directive" && node.name.value === directive;
                const label = getDirectiveArgumentValue(node, "label");
                if ((label === null || label === void 0 ? void 0 : label.kind) === "StringValue" &&
                    label.value.startsWith("SsrDontStrip")) {
                    shouldStrip = false;
                }
                return shouldStrip;
            },
            remove: true,
        }))
            .concat({
            test(node) {
                if (node.kind !== "Directive")
                    return false;
                const label = getDirectiveArgumentValue(node, "label");
                return ((label === null || label === void 0 ? void 0 : label.kind) === "StringValue" &&
                    label.value.startsWith("SsrStrip"));
            },
            remove: true,
        }), modifiedQuery);
        if (modifiedQuery === null) {
            return utilities_1.Observable.of({});
        }
        operation.query = modifiedQuery;
        return forward(operation);
    }
}
exports.RemoveMultipartDirectivesLink = RemoveMultipartDirectivesLink;
//# sourceMappingURL=RemoveMultipartDirectivesLink.js.map