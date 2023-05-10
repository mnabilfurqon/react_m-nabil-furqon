import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://valued-alien-86.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "jRSgudQ1oYAwLkaF3wCJ7wyfsHhKk66XzbmaHnP5hGndpZhwFNneOx6zBvQ7Au9r",
  },
});
