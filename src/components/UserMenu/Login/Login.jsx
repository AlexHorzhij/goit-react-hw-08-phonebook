import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/auth/operationAuth";
import { selectIsLogin } from "redux/auth/authSelectors";
import { Box, TextField, Button, Container, Typography, Avatar, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


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

    return <div>
    <Container
            sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',              
          }}>            
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            
            <Box
            display="flex"
            flexDirection="column"
            gap={2}
            component="form"            
            sx={{
                '& .MuiTextField-root': {mt: 1, mb: 1, }, mb: 2, width:'50%',
            }}
            noValidate
            // autoComplete="off"
            onSubmit={onLogin}>
                           
            <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth/> 
                
            <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth/>  
                
                <Button variant="contained" type="submit" fullWidth 
                >Submit</Button>
                 <Link to="/register"
            variant="body1"
            component={NavLink}
            alignSelf='flex-end'
            >Don't have an account? Sign Up
        </Link>
        </Box>       
        </Container>
    </div>
    // <div>
    //     <form onSubmit={onLogin}>
    //         <label htmlFor="login">Email</label>
    //         <input type="email" name="email" id="login" />
    //         <label htmlFor="password">Password</label>
    //         <input type="text" name="password" id="password" />
    //         <button type="submit">Login</button>
    //     </form>
    //     <Link to="/register">Register</Link>
    // </div>
};