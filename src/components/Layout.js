import classes from '../styles/Layout.module.css';
import Nav from "./Nav";

export default function Layout(props){
    const Children = props.children
    console.log('children', Children);
    return (
        <>
        <Nav/>
        <main className={classes.main}>
            <div className={classes.container}>
                {Children}
            </div>
        </main>
        </>
        
        
    );
}