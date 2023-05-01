
import { Navigate, Outlet } from "react-router-dom"
import {React} from 'react'
import Header from './Header'
import NavBar from "./NavBar"

const Layout = ()=> {
    return (
        <main>      
            <Header/>
            <NavBar/>
            <div className='content'>
                <div className='content_body'>
                    <Outlet/>
                </div>                 
            </div>
           
        </main>
    )
}

export default Layout
