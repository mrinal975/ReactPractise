export default function Form({children, className, ...rest}){
    return (
        <form className={'${className} ${classes.form}'} action="#" {...rest}>
            {children}
        </form>
    );
}