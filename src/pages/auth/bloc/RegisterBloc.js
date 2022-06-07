const RegisterBloc = (authService, useAuth, navigation) => {

    const {signup} = authService();
    const {screenState, setScreenState} = useAuth();
    const {navigateTo} = navigation();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const user = {
                email: screenState.email,
                password: screenState.password
            }
            const response = await signup(user);
            if (response.code === 201) navigateTo('/login');
        } catch (e) {
            setScreenState({...screenState, error: e.response.data.message});
        }
    }

    const handleChangeEmail = (e) => {
        setScreenState({...screenState, email: e.target.value})
    }

    const handleChangePassword = (e) => {
        setScreenState({...screenState, password: e.target.value})
    }

    const showError = () => {
        return screenState.error ? <div className='error-message'>{screenState.error}</div> : null;
    }

    return {handleRegister, handleChangeEmail, handleChangePassword, screenState, showError}

}

export default RegisterBloc;