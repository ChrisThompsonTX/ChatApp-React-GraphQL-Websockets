import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://localhost:4000/',
    cache: new InMemoryCache()
});

const GET_MESSAGES = gql`
query {
  messages {
    id
    content
    user
  }
}`;

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES);
    if (!data) {
        return null;
    }
    return JSON.stringify(data);
}

const Chat = () => {
    return (
        <div><Messages user="Jack" /></div>
    )
}

export default () => (
        <ApolloProvider client={client} >
            <Chat />
        </ApolloProvider>
)