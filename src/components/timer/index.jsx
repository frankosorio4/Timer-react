import './timer.css'

export function Timer() {
    return (
        <div className='container--timer'>
            {/*minutos*/}
            <span>0</span>
            <span>0</span>
            {/*separador*/}
            <div className='separator--timer'>:</div>
            {/*segundos*/}
            <span>0</span>
            <span>0</span>
        </div>
    )
}