/**
 * Created by carlos on 8/15/17.
 */
import React from 'react';

function Topo(props){
    return (
        <div className="Topo">
            <h1>{props.nome}</h1>
            <button>Novo</button>
        </div>
    )
}

export default Topo;
