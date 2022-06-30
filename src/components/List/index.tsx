import React from "react";
import './style.scss';

function List() {

    const tarefas = [{
        tarefa: 'Teste',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Trabalho',
        tempo: '01:00:00'
    }]

    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li className="item" key={index}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;