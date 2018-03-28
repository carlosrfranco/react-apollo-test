/**
 * Created by carlos on 8/15/17.
 */
import React from 'react';

export default class ListaLembrete extends React.Component{
    constructor(props) {
        super(props);
    }

    render = () => {
        const filtro = this.props.filtro;
        const l = this.props.lembretes ? this.props.lembretes : [];
        const listItems = l.map((lembrete) =>
            {
                return <li className="Lembrete" key={lembrete.node.id}>{lembrete.node.id}</li>
            }
        );
        return (
            <ul>{listItems}</ul>
        );
    };
}