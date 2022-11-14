import { Link } from "react-router-dom";
import { TbArrowBigLeft } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/operationAuth";
import { selectIsLogin } from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function RegistrationForm() {
    const dispatch = useDispatch()
        const isLogin = useSelector(selectIsLogin);
    const navigate = useNavigate();

    const singupNew = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newName = {
            name: form.elements.name.value,
            email: form.elements.mail.value,
            password: form.elements.password.value,
        };
        dispatch(signup(newName));
        form.reset();
    };

     useEffect(() => {
        if (isLogin) {
            navigate("/contacts")
        }
    }, [isLogin, navigate]);

    return <div>
        <div>
            <Link to="/login"><TbArrowBigLeft />Back</Link>
            <Link to="/contacts"><TbArrowBigLeft/>Contacts</Link>
        </div>        
        <form onSubmit={singupNew}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="login">Email</label>
            <input type="mail" name="mail" id="login"/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password"/>
            <button type="submit">Submit</button>
        </form>
    </div>
}


