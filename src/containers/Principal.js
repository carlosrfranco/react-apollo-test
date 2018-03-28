import React from 'react';
import Topo from "../components/Topo";
import InputPesquisa from "../components/InputPesquisa";
import ListaLembrete from "../components/ListaLembrete";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const lembretesListQuery = gql`
  query lembretesQuery {
  lembretes {
    id
    titulo
  }
}`;

export default class Principal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {filtro: ''};
    }

    filtro = (valor) => {
        this.setState({filtro: valor})
    };

    render = () => {

        return (
            <Query query={lembretesListQuery}>
                {({ loading, error, lembretes }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;

                    return (
                    <div>
                        <div>
                            <Topo nome="Lembretes"/>
                        </div>
                        <div className="Conteudo">
                            <InputPesquisa filtro={this.filtro}/>
                            <ListaLembrete filtro={this.state.filtro} lembretes={lembretes} className="ListaLembretes"/>
                        </div>
                    </div>
                    )
                }}
            </Query>
        )
    }
}