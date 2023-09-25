"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccumulateMultipartResponsesLink = void 0;
const client_1 = require("@apollo/client");
const utilities_1 = require("@apollo/client/utilities");
class AccumulateMultipartResponsesLink extends client_1.ApolloLink {
    constructor(config) {
        super();
        this.maxDelay = config.cutoffDelay;
    }
    request(operation, forward) {
        if (!forward) {
            throw new Error("This is not a terminal link!");
        }
        const operationContainsMultipartDirectives = (0, utilities_1.hasDirectives)(["defer"], operation.query);
        const upstream = forward(operation);
        if (!operationContainsMultipartDirectives)
            return upstream;
        // TODO: this could be overwritten with a `@AccumulateMultipartResponsesConfig(maxDelay: 1000)` directive on the operation
        const maxDelay = this.maxDelay;
        let accumulatedData, maxDelayTimeout;
        return new utilities_1.Observable((subscriber) => {
            const upstreamSubscription = upstream.subscribe({
                next: (result) => {
                    if (accumulatedData) {
                        if (accumulatedData.data && "incremental" in result) {
                            accumulatedData.data = (0, utilities_1.mergeIncrementalData)(accumulatedData.data, result);
                        }
                        else if (result.data) {
                            accumulatedData.data = result.data;
                        }
                        if (result.errors) {
                            accumulatedData.errors = [
                                ...(accumulatedData.errors || []),
                                ...(result.errors || []),
                            ];
                        }
                        // the spec is not mentioning on how to merge these, so we just do a shallow merge?
                        if (result.extensions)
                            accumulatedData.extensions = Object.assign(Object.assign({}, accumulatedData.extensions), result.extensions);
                    }
                    else {
                        accumulatedData = result;
                    }
                    if (!maxDelay) {
                        flushAccumulatedData();
                    }
                    else if (!maxDelayTimeout) {
                        maxDelayTimeout = setTimeout(flushAccumulatedData, maxDelay);
                    }
                },
                error: (error) => {
                    if (maxDelayTimeout)
                        clearTimeout(maxDelayTimeout);
                    subscriber.error(error);
                },
                complete: () => {
                    if (maxDelayTimeout) {
                        clearTimeout(maxDelayTimeout);
                        flushAccumulatedData();
                    }
                    subscriber.complete();
                },
            });
            function flushAccumulatedData() {
                subscriber.next(accumulatedData);
                subscriber.complete();
                upstreamSubscription.unsubscribe();
            }
            return function cleanUp() {
                clearTimeout(maxDelayTimeout);
                upstreamSubscription.unsubscribe();
            };
        });
    }
}
exports.AccumulateMultipartResponsesLink = AccumulateMultipartResponsesLink;
//# sourceMappingURL=AccumulateMultipartResponsesLink.js.map