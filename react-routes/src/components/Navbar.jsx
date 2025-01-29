import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>
            <h1>Example Navbar content</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About me</Link>
            <Link to={'/contact'}>Contact me</Link>

        </nav>
    )
}