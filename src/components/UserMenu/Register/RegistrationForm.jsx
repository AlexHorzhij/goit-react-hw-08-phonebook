import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "redux/auth/operationAuth";
import { selectIsLogin } from "redux/auth/authSelectors";
import { Box, TextField, Button, Container, Typography, Avatar, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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
        <Container
            sx={{
            mt:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',  
            justifyContent:'center',            
          }}>            
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            
            <Box
            display="flex"
            flexDirection="column"
            gap={2}
                component="form"
                            // alignSelf='flex-end'
            sx={{
                '& .MuiTextField-root': {mt: 1, mb: 1 }, mb: 2, width:'50%',
            }}
            noValidate
            // autoComplete="off"
            onSubmit={singupNew}>
            <TextField
                id="name"
                label="Name"
                type="text"
                fullWidth
                />
                
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
                <Link to="/login"
            variant="body1"
            component={NavLink}
            alignSelf='flex-end'
            >Already have an account? Sign in
        </Link>
        </Box>
        </Container>
    </div>
}


