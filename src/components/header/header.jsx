
import './header.css'

export function Header(){
    return (
        <header className='container--header'>
            <img src="/Logo.png" alt="Logotipo do lab timer 365" />
            <nav>
                <a href="">Home</a>
                <a href="">Historico</a>
            </nav>
        </header>
    )
}