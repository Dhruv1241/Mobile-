import { useState, useRef, useContext } from "react";
import './Auth.css';
import { Contex } from "../../UI/Contex";
const AuthForm = () => {
    const authctx = useContext(Contex)
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailinputref = useRef();
  const passwordinputref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const mail = emailinputref.current.value;
    const password = passwordinputref.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4-UnpHQpeomDMsxOvgHfE0TlzznujmQI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4-UnpHQpeomDMsxOvgHfE0TlzznujmQI";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: mail,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMsg = "Authentication failed";
              if (data && data.error && data.error.message) {
                errorMsg = data.error.message;
              }
              // alert(errorMsg);
              throw new Error(errorMsg);
            });
          }
        })
        .then((data) => {
          authctx.loginHandler(data.idToken)
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  return (
    <section className="auth">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="label">Your Email</label>
          <input type="email" id="email" required ref={emailinputref} />
        </div>
        <div className="control">
          <label htmlFor="label">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordinputref}
          />
        </div>
        <div className="actions">
          <button>{isLogin ? "Login" : "Create account"}</button>
          <button
            type="button"
            onClick={switchAuthModeHandler}
            className="toggle"
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
