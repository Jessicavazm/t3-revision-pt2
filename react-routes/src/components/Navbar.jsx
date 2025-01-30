import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"
export default function Navbar() {
    return(
        <nav>
            <h1>Example Navbar content</h1>
            <NavLink to={'/'} className={({isActive}) => { return isActive ? "active":""}}>
            Home</NavLink>
            <NavLink to={'/about'} className={({isActive}) => { return isActive ? "active":""}}>About me</NavLink>
            <NavLink to={'/contact'} className={({isActive}) => { return isActive ? "active":""}}>Contact me</NavLink>
            <NavLink to={'/projects'} className={({isActive}) => { return isActive ? "active":""}}>My Projects</NavLink>
            <NavLink to={'/projects/terminalApp'} className={({isActive}) => { return isActive ? "active":""}}>My Terminal App</NavLink>
        </nav>
    )
}