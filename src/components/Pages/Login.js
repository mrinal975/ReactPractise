export default function Login(){
    return (
        <>
        <h1>Login to your account</h1>
        <div class="column">
        <div class="illustration">
            <img src="./images/login.svg" alt="Login" />
        </div>
        <form class="login form" action="#">
        <div class="textInput">
            <input type="text" placeholder="Enter email" />
            <span class="material-icons-outlined"> alternate_email </span>
        </div>

        <div class="textInput">
            <input type="password" placeholder="Enter password" />
            <span class="material-icons-outlined"> lock </span>
        </div>

        <button class="button">
            <span>Submit now</span>
        </button>

        <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
        </form>
        </div>
        </>
    );
}