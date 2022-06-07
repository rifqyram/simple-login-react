import { useNavigate } from "react-router-dom"

const RouteNavigation = () => {
    const navigate = useNavigate();

    const navigateTo = (url) => {
        navigate(url);
    }

    return {navigateTo};
}

export default RouteNavigation;