import { Header } from "./Logout.styled";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operationAuth";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectIsLogin } from "redux/auth/authSelectors";

export function Logout() {
    const userName = useSelector(selectUser); 
    const isLogin = useSelector(selectIsLogin);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
    if (!isLogin) {
        navigate("/login")
    }
    }, [isLogin, navigate]);

    console.log(userName)
    return <Header>
        <p>{userName}</p>
        <button type="button" onClick={onLogout}>Exit</button>
    </Header>
};