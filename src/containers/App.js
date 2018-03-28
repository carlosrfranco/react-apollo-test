import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Principal from "./Principal";

const client = new ApolloClient({
    uri: "http://localhost:38480",
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
