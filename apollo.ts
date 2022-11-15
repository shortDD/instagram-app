import { ApolloClient, InMemoryCache, makeVar, split } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from "@apollo/client/utilities";
export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");
const httpLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});
const wsLink = new WebSocketLink(
  new SubscriptionClient("ws://localhost:4000/subscriptions", {
    connectionParams: {
      token: tokenVar(),
    },
  })
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink.concat(authLink)
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
export { client };
