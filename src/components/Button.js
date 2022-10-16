import classes from '../styles/Button.module.css';

export default function Button({className, children}){
    return (
        <div className={`${classes.button} button ${className}`}>
            <span>{children}</span>
        </div>
    );
}