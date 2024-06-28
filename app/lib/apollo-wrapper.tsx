"use client";

import { ApolloLink, HttpLink, } from "@apollo/client";
import { ApolloNextAppProvider, SSRMultipartLink, ApolloClient, InMemoryCache} from "@apollo/experimental-nextjs-app-support";

function makeClient() {
  const httpLink = new HttpLink({
      uri: "https://admin.acceptrec.co.uk/graphql",
  });

  return new ApolloClient({
    cache: new InMemoryCache() ,
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
    defaultOptions: {
      // Set default fetch policy to "no-cache" to disable cache for all queries
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}