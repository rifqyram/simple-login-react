import './Login.css';
import {Link} from "react-router-dom";

const Login = ({bloc}) => {

    const {
        handleLogin,
        handleChangeEmail,
        handleChangePassword,
        screenState,
        showError,
    } = bloc();

    return (
        <div className='login-form'>
            <h2>Login Form</h2>
            {showError()}
            <form onSubmit={handleLogin}>
                <div className='input-container'>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChangeEmail}
                           value={screenState.email}
                           type="email"
                           id="email"
                           name='email'/>
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChangePassword}
                        value={screenState.password}
                        type="password"
                        id="password"
                        name='password'/>
                </div>
                <span>Don't have any account? <Link to='/register'>Sign Up</Link></span>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login;