import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import * as url from "url";

function SignIn() {
  const { login } = useContext(AuthContext);    }

        //The preventDefault() method of the Event interface tells the user agent
    // that if the event does not get explicitly handled,
    // its default action should not be taken as it normally would be.
    //The preventDefault() method stops the default action of a selected element
    // from happening by a user.
    // This method does not accept any parameter and works in two ways:
     //It prevents a link from following the URL so that the browser can't go another page
    //It prevents a submit button from submitting a form.

  function handleSubmit = async (e) => {
    e.preventDefault() 
    //STEP 3: REQUST TO INLOG TO SERVER
        try {
          const res = await axios.post
          ('https://localhost:3000/login', data:
             email,
                  password
          });
          console.log(res.data.accessToken)

          }
        catch (e) {
    {
        console.error("Wrong Email or password 🚫", e)
    }
            //ERRORS IN DE UI


    //STEP 4 : JWT.OI GIVE TOKEN TO LOGIN FUNCTION
    SignIn
    (res.data.accessToken);
  }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
        <p>*invoervelden*</p>
        <button type="submit">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;