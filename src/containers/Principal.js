import React from 'react';
import Topo from "../components/Topo";
import InputPesquisa from "../components/InputPesquisa";
import ListaLembrete from "../components/ListaLembrete";
import RestClientAPI from "../RestClientAPI";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { graphql } from "react-apollo";

const channelsListQuery = gql`
  query ChannelsListQuery {
     channels {
       id
       name
     }
   }
`;

const ChannelsListWithData = graphql(channelsListQuery)(ListaLembrete);

export default class Principal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {filtro: ''};
        this.api = new RestClientAPI();
    }

    componentDidMount = () => {
        this.api.doGET("data/data.json", this.getLembretes);
    };

    filtro = (valor) => {
        this.setState({filtro: valor})
    };

    getLembretes = (lista) => {
        this.setState({lembretes: lista})
    };

    render = () => {

        return (
            <Query query={channelsListQuery}>
                {({ loading, error, channels }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;

                    return (
                    <div>
                        <div>
                            <Topo nome="Lembretes"/>
                        </div>
                        <div className="Conteudo">
                            <InputPesquisa filtro={this.filtro}/>
                            <ListaLembrete filtro={this.state.filtro} lembretes={channels} className="ListaLembretes"/>
                        </div>
                    </div>
                    )
                }}
            </Query>
        )
    }
}