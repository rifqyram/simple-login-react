import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../pages/auth/components/Login";
import RouteGuard from "../pages/auth/RouteGuard";
import Home from "../pages/home/components/Home";
import Register from "../pages/auth/components/Register";
import HomeBloc from "../pages/home/bloc/HomeBloc";
import AuthService from "../pages/auth/service/AuthService";
import RouteNavigation from "./RouteNavigation";
import TokenService from "../shared/http-client/TokenService";
import UseHome from "../pages/home/bloc/UseHome";
import HelloService from "../pages/home/service/HelloService";
import LoginBloc from "../pages/auth/bloc/LoginBloc";
import UseAuth from "../pages/auth/bloc/UseAuth";
import RegisterBloc from "../pages/auth/bloc/RegisterBloc";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login'
                       element={<Login bloc={() => LoginBloc(AuthService, TokenService, RouteNavigation, UseAuth)}/>}/>
                <Route path='/register' element={<Register bloc={() => RegisterBloc(AuthService, UseAuth, RouteNavigation)}/>}/>
                <Route path='/'
                       element={
                           <RouteGuard redirectTo='/login'>
                               <Home
                                   bloc={() => HomeBloc(AuthService, RouteNavigation, TokenService, UseHome, HelloService)}/>
                           </RouteGuard>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;