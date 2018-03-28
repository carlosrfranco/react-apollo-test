import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Principal from "./Principal";
import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from '../schema';

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

addMockFunctionsToSchema({ schema });
const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

const client = new ApolloClient({
    ssr: true,
    networkInterface: mockNetworkInterface,
});

const lembretes = [
    { id: 1, title: 'Text 1' },
    { id: 2, title: 'Text 2' },
    { id: 3, title: 'Text 3' },
    { id: 4, title: 'Text 4' },
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
