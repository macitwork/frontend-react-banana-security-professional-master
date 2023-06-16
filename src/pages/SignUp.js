import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import axios from "axios";


function SignUp() {

    const {register,handelSubmit,formState }  = useForm();
    function submit(data) {
        console.log (data) 
    }
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form  onSubmit={handelSubmit(submit())}>
          <InputField
              id={"emailField"}
              children={"Email:"}
              register={register}
              name={"email"}
              validation={{require: true}}
              type={email}
              >    Email:
          </InputField>
        <p>*Invoervelden*</p>
          <button type={submit()}>Verzenden</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;