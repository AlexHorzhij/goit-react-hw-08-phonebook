import {Contacts} from "./Contacts/Contacts";
import { Oval } from 'react-loader-spinner';
import { useSelector, useDispatch } from "react-redux";
import { isLoadingFetch } from "redux/contacts/selectorsContacts";
import { Route, Routes } from "react-router-dom";
import { Login } from "./UserMenu/Login/Login";
import { RegistrationForm } from "./UserMenu/Register/RegistrationForm";
import { useEffect } from "react";
import { current } from "redux/auth/operationAuth";

import { selectIsLogin } from "redux/auth/authSelectors";
import { useNavigate } from "react-router-dom";


export const App = () => {
  const isLoading = useSelector(isLoadingFetch);
  const dispatch = useDispatch();

    const isLogin = useSelector(selectIsLogin);
    const navigate = useNavigate();

   useEffect(() => {
     isLogin ? navigate("/contacts") : navigate("/login")
     
    }, [isLogin, navigate]);

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        // marginTop: '100px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      
      <div style={{position:'absolute', top:'50%'}}>
        {isLoading && <Oval
          height={80}
          width={80}
          color="#223c26"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4c714c"
          strokeWidth={5}
          strokeWidthSecondary={5}/>}
      </div>
    </div>
  );
};
