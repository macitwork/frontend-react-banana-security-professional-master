import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function Profile() {

           const {user:{email}} = useContext(AuthContext) ;
         


  return (
    <main>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
          <p>welcome<span>{ email }</span></p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </main>
  );
}

export default Profile;