/**
 * Created by carlos on 8/15/17.
 */
import React from 'react';

export default class InputPesquisa extends React.Component{
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.filtro(e.target.value);
    };

    render = () => {
        return (
            <input className="BuscaInput"
                   onChange={this.handleChange}
                   placeholder="Find by name"/>
        )
    }
}