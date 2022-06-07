const TokenService = () => {

    const setToken = (userToken) => {
        if (userToken !== null) sessionStorage.setItem("user", JSON.stringify(userToken));
    }

    const getLocalAccessToken = () => {
        const user = getUserToken();
        return user?.accessToken;
    }

    const updateLocalAccessToken = (token) => {
        let user = getUserToken();
        user.accessToken = token;
        sessionStorage.setItem("user", JSON.stringify(user));
    }

    const getUserToken = () => {
        return JSON.parse(sessionStorage.getItem("user"));
    }

    const removeToken = () => {
        sessionStorage.removeItem("user");
    }

    return {
        setToken,
        getLocalAccessToken,
        updateLocalAccessToken,
        removeToken
    }
}

export default TokenService;