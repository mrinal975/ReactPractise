import logo from "../assets/logo.png";
import classes from '../styles/Nav.modules.css';
import Account from "./Account";
export default function Nav(){
    return (
        
        <nav className={classes.nav}>
            <ul>
                <li>
                <a href="index.html" className={classes.brand}>
                    <img src={logo} alt="react " />
                    <h3>Learning React</h3>
                </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
}