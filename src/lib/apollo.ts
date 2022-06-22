import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0jgv41i7h01xs324i4upm/master',
    cache: new InMemoryCache()
})