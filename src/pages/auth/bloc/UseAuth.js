import {useState} from "react";

const UseAuth = () => {
    const [screenState, setScreenState] = useState({
        email: '',
        password: '',
        error: ''
    });

    return {
        screenState,
        setScreenState
    }
}

export default UseAuth;