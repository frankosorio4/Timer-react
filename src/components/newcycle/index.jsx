import "./newcycle.css";

export function NewCycle(){
    return(
        <div className="container--new-cycle">
            <label htmlFor="task">Vou Trabalhar em: </label>
            <input type="text" id="task" placeholder="Criar uma tarefa"/>
            <label htmlFor="minutesAmount">durante</label>
            <input type="number" name="" id="minutesAmount" />
            <span>minutos.</span>
        </div>
    )
}