const LoginBloc = (authService, tokenService, navigation, useAuth) => {
    const {login} = authService();
    const {setToken} = tokenService();
    const {navigateTo} = navigation();
    const {screenState, setScreenState} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email: screenState.email,
                password: screenState.password
            }
            const response = await login(user);
            const token = {
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken
            }
            setToken(token);
            navigateTo('/');
        } catch (e) {
            setScreenState({...screenState, error: e.response.data.message});
        }
    }

    const showError = () => {
        return screenState.error ? <div className='error-message'>{screenState.error}</div> : null;
    }

    const handleChangeEmail = (e) => {
        setScreenState({...screenState, email: e.target.value})
    }

    const handleChangePassword = (e) => {
        setScreenState({...screenState, password: e.target.value})
    }

    return {
        handleLogin,
        handleChangeEmail,
        handleChangePassword,
        screenState,
        showError
    }
}

export default LoginBloc;