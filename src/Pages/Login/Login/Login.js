import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  let errorMsg;
  if (error) {
    return (errorMsg = <p className="text-danger">Error: {error?.message}</p>);
  }
  const navigateToRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter mail address.");
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-50 mx-auto mt-3">
      <h2 className="text-center text-primary">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          className="btn btn-primary w-50 mx-auto d-block mb-3"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorMsg}
      <p>
        Are new in Genius car?{" "}
        <Link
          to="/register"
          className="text-danger"
          onClick={navigateToRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forgot Password?{" "}
        <button className="btn btn-link text-primary" onClick={resetPassword}>
          Reset Password
        </button>
      </p>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
