"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSRMultipartLink = void 0;
const client_1 = require("@apollo/client");
const RemoveMultipartDirectivesLink_1 = require("./RemoveMultipartDirectivesLink");
const AccumulateMultipartResponsesLink_1 = require("./AccumulateMultipartResponsesLink");
class SSRMultipartLink extends client_1.ApolloLink {
    constructor(config = {}) {
        const combined = client_1.ApolloLink.from([
            new RemoveMultipartDirectivesLink_1.RemoveMultipartDirectivesLink({
                stripDefer: config.stripDefer,
            }),
            new AccumulateMultipartResponsesLink_1.AccumulateMultipartResponsesLink({
                cutoffDelay: config.cutoffDelay || 0,
            }),
        ]);
        super(combined.request);
    }
}
exports.SSRMultipartLink = SSRMultipartLink;
//# sourceMappingURL=SSRMultipartLink.js.map