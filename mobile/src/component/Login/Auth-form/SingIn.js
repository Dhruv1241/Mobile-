import React, { useContext, useEffect } from "react";
import "./Auth.css";
import { useState } from "react";
import { Contex } from "../../UI/Contex";
import {  useNavigate } from "react-router-dom";
export default function SingIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const ctx = useContext(Contex);
  console.log(ctx)
  const navigate = useNavigate()
  const handlersubmit = async (e) => {
    e.preventDefault();
    await ctx.userSingin(email, password);
  };
  useEffect(()=>{
    if(ctx.islogedIn){
      navigate('/')
    }
  },[ctx, navigate])

  return (
    <section className="auth">
      <h1>Sing in</h1>
      <form onSubmit={handlersubmit}>
        <div className="control">
          <label htmlFor="label">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="label">Your Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button> sing up</button>
        </div>
      </form>
    </section>
  );
}
