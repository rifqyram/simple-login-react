import {useState} from "react";

const UseHome = () => {
    const [screenState, setScreenState] = useState({
        email: '',
        error: ''
    });

    console.log(screenState)

    return {screenState, setScreenState};
}

export default UseHome;