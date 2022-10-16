import classes from "../styles/Summary.module.css";
import successImage from "../assets/success.png";

export default function Summary(){
    return(
        <>
            <div className={classes.summary}>
                <div className={classes.point}>
                    <p className={classes.score}>
                        Your score is <br />
                        5 out of 10
                    </p>
                </div>

                <div className={classes.badge}>
                    <img src={successImage} alt="Success" />
                </div>
            </div>
        </>
    );
}