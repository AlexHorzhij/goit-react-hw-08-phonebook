import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operationAuth";
import { selectIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Login() {
    const dispatch = useDispatch();
    const isLogin = useSelector(selectIsLogin);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const user = {
            email: form.elements.email.value,
            password: form.elements.password.value,
        };
        form.reset();
        dispatch(login(user));
    };

    useEffect(() => {
        if (isLogin) {
            navigate("/contacts")
        }
    }, [isLogin, navigate]);

    console.log(isLogin)
   

    return <div>
        <form onSubmit={onLogin}>
            <label htmlFor="login">Email</label>
            <input type="email" name="email" id="login" />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
            <button type="submit">Login</button>
        </form>
        <Link to="/register">Register</Link>
    </div>
};