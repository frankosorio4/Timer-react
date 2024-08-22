import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
// import PropTypes from 'prop-types'
import './template.css'

export function Layout(){
    return(
        <>
            <Header/>
            <main className="container--template">
                <div className="container--template-contents">
                    <Outlet/>
                </div>
            </main>
        </>
    )
}

// Layout.propTypes ={
//     children: PropTypes.node
// }