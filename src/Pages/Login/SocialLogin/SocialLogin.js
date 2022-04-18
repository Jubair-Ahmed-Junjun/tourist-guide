import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import facebook from "../../../images/Social Icon/facebook.png";
import github from "../../../images/Social Icon/github.png";
import google from "../../../images/Social Icon/google.png";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubuser, githubloading, githuberror] =
    useSignInWithGithub(auth);

  if (user || githubuser) {
    navigate("/home");
  }
  let errorMsg;
  if (error || githuberror) {
    return (errorMsg = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {githuberror?.message}
        </p>
      </div>
    ));
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 m-2">or</p>
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
      </div>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img className="mx-2" style={{ width: "30px" }} src={google} alt="" />
          <span>Sign with Google</span>
        </button>
        {errorMsg}
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            className="mx-2"
            style={{ width: "30px" }}
            src={facebook}
            alt=""
          />
          <span>Sign with Facebook</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img className="mx-2" style={{ width: "30px" }} src={github} alt="" />
          <span>Sign with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
