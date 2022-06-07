import {useEffect} from "react";
import './Home.css'

const Home = ({bloc}) => {

    const {
        handleLogout,
        handleHello,
        screenState,
    } = bloc();

    useEffect(() => {
        handleHello();
    }, []);

    return (
        <div className='home'>
            <h1>Welcome {screenState.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;