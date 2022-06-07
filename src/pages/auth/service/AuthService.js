import client from "../../../shared/http-client/Client";

const AuthService = () => {
    const signup = async (user) => {
        const {data} = await client.post("auth/signup", user);
        return data;
    }

    const login = async (user) => {
        const {data} = await client.post(`auth/signin`, user);
        return data;
    }

    const logout = async (accessToken) => {
        const {data} = await client.post(`auth/logout`, {token: accessToken});
        return data;
    }

    return {
        signup,
        login,
        logout,
    }
}

export default AuthService;