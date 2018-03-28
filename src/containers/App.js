import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Principal from "./Principal";

import { typeDefs } from '../schema';
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({
    schema
});

const apolloCache = new InMemoryCache(window.__APOLLO_STATE__);

const client = new ApolloClient({
    cache: apolloCache,
    link: new SchemaLink({ schema })
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Principal/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
