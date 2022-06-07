import {Navigate} from "react-router-dom";

const RouteGuard = ({children, redirectTo}) => {
    if (sessionStorage.getItem("user")) return children;
    else return <Navigate to={redirectTo}/>;
}

export default RouteGuard;