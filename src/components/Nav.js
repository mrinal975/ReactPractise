import logo from "../assets/logo.png";
import classes from '../styles/Nav.module.css';
import Account from "./Account";
import { Link } from "react-router-dom";
export default function Nav(){
    return (
        
        <nav className={classes.nav}>
            <ul>
                <li>
                <Link to="/" className={classes.brand}>
                    <img src={logo} alt="react " />
                    <h3>Learning React</h3>
                </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}