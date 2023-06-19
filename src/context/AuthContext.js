import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";
export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  //STAP 1  MAKE A STATE OBJECT FOR AUTHENTICATION

  const [auth, setAuth] = useState({
    isAuth:false,
    user: null,
});
  
  const navigate = useNavigate();
    //STAP 2:  ADJUST YOUR FUNCTIONS:LOGIN AND LOGOUT
    //STAP 5 : GET TOKEN/DECODE
    // STAP 6 :KEEPING TOKEN IN LOCALSTORAGE EN DELETING AFTER LOGOUT
    //STAP 7 : GET THE USER WITH THE TOKEN
    //STAP 8 : KEEP USER DATA IN DE STATE NOT IN JWT
  function login(jwt_token) {
     const decodedToken = jwt_token (jwt_token);
      console.log(decodedToken)
    setAuth({
      ...auth,
      isAuth: true,
      user: {
        email: decodedToken.email ,
        id: decodedToken.sub,
      }

    })

    console.log('Gebruiker is ingelogd!🔓');
      navigate('/profile');
  }

  function logout() {
       localStorage.removeItem('token')
   setAuth({
         ...auth,
         isAuth: false,
         user:null,
       } )

    console.log('Gebruiker is uitgelogd!🔒');
    navigate('/');
  }

  const contextData = {
    isAuth: auth.isAuth,
      user:auth.user,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;