import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLoadingFetch } from "redux/contacts/selectorsContacts";
import { current } from "redux/auth/operationAuth";
import { selectToken } from "redux/auth/authSelectors";
import { CircularProgress } from "@mui/material";

import { Contacts } from "./Contacts/Contacts";
import { Login } from "./UserMenu/Login/Login";
import { RegistrationForm } from "./UserMenu/Register/RegistrationForm";
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const isLoading = useSelector(isLoadingFetch);
  const dispatch = useDispatch();

    const isLogin = useSelector(selectToken);
    // const navigate = useNavigate();

  //  useEffect(() => {
  //    isLogin ? navigate("/contacts") : navigate("/login")
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  useEffect(() => {
    if(isLogin){
    dispatch(current());}
  }, [dispatch, isLogin])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Login />} />
      </Routes>
      
      <div style={{position:'absolute', top:'50%', left:'50%'}}>
        {isLoading && <CircularProgress size="5rem"/>}
      </div>
      <Toaster toastOptions={{style: { fontSize: '24px', }}} />
    </>
  );
};
      

