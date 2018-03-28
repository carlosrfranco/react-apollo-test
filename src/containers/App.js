import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Principal from "./Principal";
import { find, filter } from 'lodash';
import {
    makeExecutableSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

const typeDefs = `
  type Lembrete {
    id: Int!
    titulo: String
  }

  # the schema allows the following query:
  type Query {
    lembretes: [Lembrete]
  }

  # this schema allows the following mutation:
  type Mutation {
    upLembrete (
      lembreteId: Int!
    ): Lembrete
  }
`;

const resolvers = {
    Query: {
        lembretes: () => lembretes,
    },
    Mutation: {
        upLembrete: (_, { lembreteId }) => {},
    }
};

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

const client = new ApolloClient({
    networkInterface: mockNetworkInterface,
});

const lembretes = [
    { id: 1, titulo: 'Introduction to GraphQL' },
    { id: 2, titulo: 'Welcome to Apollo' },
    { id: 3, titulo: 'Advanced GraphQL' },
    { id: 4, titulo: 'Launchpad is Cool' },
];


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
