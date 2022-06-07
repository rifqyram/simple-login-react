const HomeBloc = (authService, routeNavigation, tokenService, useHome, helloService) => {

    const {logout} = authService();
    const {navigateTo} = routeNavigation();
    const {removeToken} = tokenService();
    const {screenState, setScreenState} = useHome();
    const {hello} = helloService();

    const handleLogout = async () => {
        try {
            await logout();
            navigateTo('/login');
            removeToken();
        } catch (e) {
            setScreenState({...screenState, error: e.response});
        }
    }

    const handleHello = async () => {
        try {
            const response = await hello();
            setScreenState({...screenState, email: response.data.email});
        } catch (e) {
            setScreenState({...screenState, error: e.response});
        }
    }

    return {
        handleLogout,
        handleHello,
        screenState,
    }
}

export default HomeBloc;