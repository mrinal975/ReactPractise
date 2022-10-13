import styles from './assets/css/Logo.module.css';

export default function Logo(){

    return (
        <div className="logo">
            <div className="hair">
                
            </div>
            <div className={styles.glasses}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103.63 42.68"/>
            </div>
            <div className="play">
                <button type="button">Colorize Glass</button>
                <button type="button">Reset Glass</button>
            </div>
        </div>
    );
}