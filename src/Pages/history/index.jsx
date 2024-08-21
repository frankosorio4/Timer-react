
import { Status } from '../../components/status'
import './history.css'

export function HistoryPage(){
    return(
        <div className="container--history">
            <h1>Meu Historico</h1>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duraçao</th>
                        <th>Inicio</th>
                        <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Conserto de ..</td>
                        <td>25 minutos</td>
                        <td>Ha 30 segundos</td>
                        <td>
                            <Status>Concluido</Status>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}