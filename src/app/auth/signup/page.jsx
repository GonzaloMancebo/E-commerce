"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importar el hook de enrutamiento de next/navigation
import Link from "next/link";
import "./signup.css"; // Asegúrate de tener este archivo con los estilos
import Header from "@/app/Components/Header/Header";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Importar Firebase Auth
import app from "../../../../firebase.config"; // Importa tu configuración de Firebase

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Hook para redirección

  const showNotification = (message, type = "error") => {
    const notification = document.createElement("div");
    notification.classList.add("notification", type, "show");
    notification.textContent = message;
    document.body.appendChild(notification);

    // Desaparecer la notificación después de 3 segundos
    setTimeout(() => {
      notification.classList.add("hide");
      setTimeout(() => notification.remove(), 1000); // Eliminar después de la animación
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!firstName || !lastName || !email || !password) {
      showNotification("Por favor, completa todos los campos.", "error");
      return;
    }

    const auth = getAuth(app);

    try {
      // Crea el usuario en Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario registrado:", user);

      // Mostrar mensaje de éxito
      showNotification(`Bienvenido, ${firstName}. Serás redirigido al login para iniciar sesión.`, "success");

      // Redirigir al login tras 3 segundos
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    } catch (error) {
      showNotification(error.message, "error");
    }
  };

  return (
    <div className="page-container">
      <Header />
      
      <div className="sign-up-container">
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Sign Up</h2>

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
          <div>
          <button type="submit" className="btn-signup">Sign Up</button>
          </div>
          <div>
          <Link href="/auth/login">
            <button type="button" className="btn-login">Login</button>
          </Link>
          </div>
          
         
        </form>
      </div>
    </div>
  );
}

export default SignUp;
