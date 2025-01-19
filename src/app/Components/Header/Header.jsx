import Link from "next/link"; // Asegúrate de importar Link de Next.js
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <h1>Fake Shop</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div>
          {/* Botones de Login y Sign Up */}
          <Link href="/auth/login">
            <button>Login</button>
          </Link>
          <Link href="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
