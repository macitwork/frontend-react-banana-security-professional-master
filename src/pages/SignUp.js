import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import axios from "axios";


function SignUp() {

    const {register,handelSubmit,formState,setError }  = useForm();
    function submit(data) {
        console.log (data) 
    }
  return (
    <main>
      <h1>Registreren</h1>
      <p>this is hard core bullshit?</p>
      <form  onSubmit={handelSubmit(submit)}>
          <InputField
              id={"emailField"}
              children={"Email:"}
              register={register}
              name={"email"}
              validation={{require: true}}
              type="email"
             // child={setError(errors.name &&);}

          >    Email:
          </InputField>
        <p>*Invoervelden*</p>
          <button type={submit()}>Verzenden</button>
          <p> {"...errors.name.massage"} </p>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>


</main>
  );
}

export default SignUp;