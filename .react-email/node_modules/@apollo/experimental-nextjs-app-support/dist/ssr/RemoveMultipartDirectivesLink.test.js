"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const RemoveMultipartDirectivesLink_1 = require("./RemoveMultipartDirectivesLink");
const shoehorn_1 = require("@total-typescript/shoehorn");
const client_1 = require("@apollo/client");
const graphql_1 = require("graphql");
const vitest_1 = require("vitest");
const queryWithDefer = (0, client_1.gql) `
  query myQuery {
    fastField
    ... @defer {
      slowField1
    }
    ... @defer {
      slowField2
    }
  }
`;
const queryWithDeferAndDontStripAnnotation = (0, client_1.gql) `
  query myQuery {
    fastField
    ... @defer(label: "SsrDontStrip1") {
      slowField1
    }
    ... @defer(label: "SsrDontStrip2") {
      slowField2
    }
    ... @defer {
      slowField3
    }
  }
`;
const queryWithDeferAndStripAnnotation = (0, client_1.gql) `
  query myQuery {
    fastField
    ... @defer(label: "SsrStrip1") {
      slowField1
    }
    ... @defer(label: "SsrStrip2") {
      slowField2
    }
    ... @defer {
      slowField3
    }
  }
`;
(0, vitest_1.it)("removes fields with a @defer directive", () => {
    const link = new RemoveMultipartDirectivesLink_1.RemoveMultipartDirectivesLink({
        stripDefer: true,
    });
    let resultingQuery;
    link.request((0, shoehorn_1.fromPartial)({ query: queryWithDefer }), function (operation) {
        resultingQuery = operation.query;
        return client_1.Observable.of({});
    });
    (0, vitest_1.expect)((0, graphql_1.print)(resultingQuery)).toMatchInlineSnapshot(`
  "query myQuery {
    fastField
  }"
  `);
});
(0, vitest_1.it)("`stripDefer` defaults to `true`", () => {
    const link = new RemoveMultipartDirectivesLink_1.RemoveMultipartDirectivesLink({
        stripDefer: true,
    });
    let resultingQuery;
    link.request((0, shoehorn_1.fromPartial)({ query: queryWithDefer }), function (operation) {
        resultingQuery = operation.query;
        return client_1.Observable.of({});
    });
    (0, vitest_1.expect)((0, graphql_1.print)(resultingQuery)).toMatchInlineSnapshot(`
    "query myQuery {
      fastField
    }"
    `);
});
(0, vitest_1.it)("preserves @defer fields with a `SsrDontStrip` label", () => {
    const link = new RemoveMultipartDirectivesLink_1.RemoveMultipartDirectivesLink({
        stripDefer: true,
    });
    let resultingQuery;
    link.request((0, shoehorn_1.fromPartial)({ query: queryWithDeferAndDontStripAnnotation }), function (operation) {
        resultingQuery = operation.query;
        return client_1.Observable.of({});
    });
    (0, vitest_1.expect)((0, graphql_1.print)(resultingQuery)).toMatchInlineSnapshot(`
    "query myQuery {
      fastField
      ... @defer(label: \\"SsrDontStrip1\\") {
        slowField1
      }
      ... @defer(label: \\"SsrDontStrip2\\") {
        slowField2
      }
    }"
  `);
});
(0, vitest_1.it)("can be configured to not remove @defer fields", () => {
    const link = new RemoveMultipartDirectivesLink_1.RemoveMultipartDirectivesLink({
        stripDefer: false,
    });
    let resultingQuery;
    link.request((0, shoehorn_1.fromPartial)({ query: queryWithDefer }), function (operation) {
        resultingQuery = operation.query;
        return client_1.Observable.of({});
    });
    (0, vitest_1.expect)((0, graphql_1.print)(resultingQuery)).toMatchInlineSnapshot(`
    "query myQuery {
      fastField
      ... @defer {
        slowField1
      }
      ... @defer {
        slowField2
      }
    }"
  `);
});
(0, vitest_1.it)("even with `stripDefer: false`, certain fields can be marked for stripping", () => {
    const link = new RemoveMultipartDirectivesLink_1.RemoveMultipartDirectivesLink({
        stripDefer: false,
    });
    let resultingQuery;
    link.request((0, shoehorn_1.fromPartial)({ query: queryWithDeferAndStripAnnotation }), function (operation) {
        resultingQuery = operation.query;
        return client_1.Observable.of({});
    });
    (0, vitest_1.expect)((0, graphql_1.print)(resultingQuery)).toMatchInlineSnapshot(`
    "query myQuery {
      fastField
      ... @defer {
        slowField3
      }
    }"
  `);
});
//# sourceMappingURL=RemoveMultipartDirectivesLink.test.js.map