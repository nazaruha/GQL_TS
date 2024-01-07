import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({ // ApolloClient is the class that represents Apollo Client itself
    // options go here
    uri: 'http://localhost:4000', // location of our apollo server
    cache: new InMemoryCache(), // for in-memory cache
});

ReactDOM.render(
  <ApolloProvider client={client}> {/* allows React component to use ApolloClient */}
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
