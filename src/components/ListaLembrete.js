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
        const listItems = this.props.lembretes.map((lembrete) =>
            {
                if(lembrete.titulo.indexOf(filtro) < 0){
                    return;
                }
                return <li className="Lembrete" key={lembrete.id}>{lembrete.titulo}
                    <div>
                        <button onClick={this.handleClickEditButton}>Editar</button>
                        <button id={lembrete.id} onClick={(e) => this.handleClickSaveButton(e)}>Salvar</button>
                    </div>
                </li>
            }
        );
        return (
            <ul>{listItems}</ul>
        );
    };
}