import classes from '../styles/TextInput.module.css';
export default function TextInput({icon, ...props}){
    return (
            <div className={classes.textInput}>
              <input {...props} />
              <span class="material-icons-outlined"> {icon} </span>
            </div>
        );
}