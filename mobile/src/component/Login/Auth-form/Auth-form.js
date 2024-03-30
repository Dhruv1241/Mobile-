import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import "./Auth.css";
import { Contex } from "../../UI/Contex";
const AuthForm = () => {
  const ctx = useContext(Contex);
  const navigate = useNavigate()
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const submitHandler=async (e)=>{
    e.preventDefault()
    await ctx.LoginHandler(Email, Password)
  }
  useEffect(()=>{
    if(ctx.islogedIn){
      navigate('/')
    }
  },[ctx, navigate])

  return (
    <section className="auth">
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="label">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            // value={Email}
          />
        </div>
        <div className="control">
          <label htmlFor="label">Your Password</label>
          <input
            // value={Password}
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button >sing up</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
