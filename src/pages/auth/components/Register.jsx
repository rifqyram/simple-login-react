import {Link} from "react-router-dom";
import './Register.css';

const Register = ({bloc}) => {

    const {handleRegister, screenState, handleChangeEmail, handleChangePassword, showError} = bloc();

    return (
        <div className='register-form'>
            <h2>Register Form</h2>
            {showError()}
            <form onSubmit={handleRegister}>
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
                <span>Already have an account? <Link to='/login'>Sign In</Link></span>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Register;