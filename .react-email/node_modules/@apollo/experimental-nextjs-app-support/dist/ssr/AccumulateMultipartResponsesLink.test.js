"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const client_1 = require("@apollo/client");
const AccumulateMultipartResponsesLink_1 = require("./AccumulateMultipartResponsesLink");
const vitest_1 = require("vitest");
const shoehorn_1 = require("@total-typescript/shoehorn");
(0, vitest_1.beforeEach)(() => {
    vitest_1.vi.useFakeTimers();
});
(0, vitest_1.afterEach)(() => {
    vitest_1.vi.restoreAllMocks();
});
(0, vitest_1.test)("normal queries can resolve synchronously", () => {
    const query = (0, client_1.gql) `
    query {
      fastField
    }
  `;
    const link = new AccumulateMultipartResponsesLink_1.AccumulateMultipartResponsesLink({
        cutoffDelay: 1000,
    });
    const nextLink = getFinalLinkWithExposedObserver();
    const subscriptionStatus = trackSubscriptionStatus(client_1.ApolloLink.from([link, nextLink.link]).request((0, shoehorn_1.fromPartial)({ query })));
    (0, vitest_1.assert)(nextLink.observer);
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [],
        error: undefined,
        complete: false,
    });
    nextLink.observer.next({ data: { fastField: "fast" } });
    nextLink.observer.complete();
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [{ data: { fastField: "fast" } }],
        error: undefined,
        complete: true,
    });
});
(0, vitest_1.test)("deferred query will complete synchonously if maxDelay is 0", () => {
    const query = (0, client_1.gql) `
    query {
      fastField
      ... @defer {
        slowField
      }
    }
  `;
    const link = new AccumulateMultipartResponsesLink_1.AccumulateMultipartResponsesLink({
        cutoffDelay: 0,
    });
    const nextLink = getFinalLinkWithExposedObserver();
    const subscriptionStatus = trackSubscriptionStatus(client_1.ApolloLink.from([link, nextLink.link]).request((0, shoehorn_1.fromPartial)({ query })));
    (0, vitest_1.assert)(nextLink.observer);
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [],
        error: undefined,
        complete: false,
    });
    nextLink.observer.next({ data: { fastField: "fast" } });
    // no complete call here!
    (0, vitest_1.expect)(nextLink.observer.closed).toBeTruthy();
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [{ data: { fastField: "fast" } }],
        error: undefined,
        complete: true,
    });
});
(0, vitest_1.test)("`next` call will be debounced and results will be merged together", () => {
    const query = (0, client_1.gql) `
    query {
      fastField
      ... @defer {
        slowField
      }
      ... @defer {
        verySlowField
      }
    }
  `;
    const link = new AccumulateMultipartResponsesLink_1.AccumulateMultipartResponsesLink({
        cutoffDelay: 1000,
    });
    const nextLink = getFinalLinkWithExposedObserver();
    const subscriptionStatus = trackSubscriptionStatus(client_1.ApolloLink.from([link, nextLink.link]).request((0, shoehorn_1.fromPartial)({ query })));
    (0, vitest_1.assert)(nextLink.observer);
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [],
        error: undefined,
        complete: false,
    });
    vitest_1.vi.advanceTimersByTime(100);
    // initial response after 100ms
    nextLink.observer.next({ data: { fastField: "fast" } });
    vitest_1.vi.advanceTimersByTime(100);
    (0, vitest_1.expect)(nextLink.observer.closed).toBeFalsy();
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [],
        error: undefined,
        complete: false,
    });
    // incremental response after 200ms
    nextLink.observer.next({
        incremental: [
            {
                path: [],
                data: { slowField: "slow" },
            },
        ],
    });
    vitest_1.vi.advanceTimersByTime(899);
    // at 1099ms, 999ms after the initial response, we still don't have our final result
    (0, vitest_1.expect)(nextLink.observer.closed).toBeFalsy();
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [],
        error: undefined,
        complete: false,
    });
    vitest_1.vi.advanceTimersByTime(2);
    // after 1101ms, 1001ms after the initial response, we have our final result
    (0, vitest_1.expect)(nextLink.observer.closed).toBeTruthy();
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [{ data: { fastField: "fast", slowField: "slow" } }],
        error: undefined,
        complete: true,
    });
    // more responses would be ignored
    nextLink.observer.next({
        incremental: [
            {
                path: [],
                data: { verySlowField: "very slow" },
            },
        ],
    });
    (0, vitest_1.expect)(nextLink.observer.closed).toBeTruthy();
    (0, vitest_1.expect)(subscriptionStatus).toStrictEqual({
        results: [{ data: { fastField: "fast", slowField: "slow" } }],
        error: undefined,
        complete: true,
    });
});
function trackSubscriptionStatus(observable) {
    (0, vitest_1.assert)(observable);
    const subscriptionStatus = {
        results: [],
        error: undefined,
        complete: false,
    };
    observable.subscribe({
        next: (result) => {
            subscriptionStatus.results.push(result);
        },
        error: (err) => {
            subscriptionStatus.error = err;
        },
        complete: () => {
            subscriptionStatus.complete = true;
        },
    });
    return subscriptionStatus;
}
function getFinalLinkWithExposedObserver() {
    const returnValue = {
        observer: undefined,
        link: new client_1.ApolloLink(() => {
            return new client_1.Observable((observer) => {
                returnValue.observer = observer;
            });
        }),
    };
    return returnValue;
}
//# sourceMappingURL=AccumulateMultipartResponsesLink.test.js.map