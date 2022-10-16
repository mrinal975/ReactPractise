import classes from '../styles/Layout.module.css';
import Nav from "./Nav";
export default function Layout({Children}){

    return (
        <>
        <Nav></Nav>
        <main className={classes.main}>
            <div className={classes.container}>
                {Children}
            </div>

        </main>
        </>
        
        
    );
}