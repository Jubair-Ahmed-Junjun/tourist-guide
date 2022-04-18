import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import "./registration.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { async } from "@firebase/util";
import Loading from "../../Shared/Loading/Loading";
const Registration = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  if (user) {
    console.log("user", user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/home");
    console.log(name, email, password);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="registration-form">
      <h2 className="text-center text-primary">Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="email address"
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="mx-2"
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={agree ? "text-success" : "text-danger"} htmlFor="">
          Accept genius car terms and condition?{" "}
        </label>
        <input
          disabled={!agree}
          className="btn btn-primary"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-danger" onClick={navigateToLogin}>
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;
