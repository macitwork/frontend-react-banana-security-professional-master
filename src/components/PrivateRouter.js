import React from 'react';
import { Outlet, Navigate} from "react-router-dom";

function PrivateRoutes({ isAuth,children }) {
    console.log (isAuth)

    return isAuth === true ? (children) :    (
       <>

            <Outlet/>
            <Navigate to="/" />;
        </>
   );
}
export default PrivateRoutes;
