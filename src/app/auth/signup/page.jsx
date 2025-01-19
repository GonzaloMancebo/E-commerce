"use client";
import { useState } from "react";
import Link from "next/link";
import "./signup.css"; // Asegúrate de tener este archivo con los estilos
import Header from "@/app/Components/Header/Header";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Validación simple
    if (!firstName || !lastName || !email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Aquí puedes manejar el registro, por ejemplo, enviando los datos a una API
    console.log("Registrando usuario:", { firstName, lastName, email, password });
  };

  return (
    <>
    <Header />
    <div className="sign-up-container">
    <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
        <button type="submit" className="submit-btn">Sign Up</button>

        <Link href="/login">
        <button type="button" className="login-btn">Login</button>
        </Link>
        </div>
      
      </form>
    </div>
    </>
  );

}

export default SignUp;
