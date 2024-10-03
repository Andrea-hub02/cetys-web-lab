import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>CETYS Ingenieria</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className="my-form">
        <div className="login-welcome-row">
            <a href="#" title="Logo">
                <img src="/cetys-logo.png" alt="Logo" className="logo"/>
            </a>
            <h1>Bienvenido</h1>
            <p>Admin Login</p>
        </div>
        <div className="input__wrapper">
            <input type="email" id="email" name="email" className="input__field" placeholder="Your Email" required/>
            <label htmlFor="email" className="input__label">Email:</label>
            <svg className="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
            </svg>
        </div>
        <div className="input__wrapper">
            <input id="password" type="password" className="input__field" placeholder="Your Password"
                title="Minimum 6 characters at least 1 Alphabet, 1 Number and 1 Symbol"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$" required/>
            <label htmlFor="password" className="input__label">
                Password
            </label>
            <svg className="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
            </svg>
        </div>
        <button type="submit" className="my-form__button">
            Login
        </button>
        <div className="socials-row">
            <a href="#" title="Use Google">
                <img src="/google.png" alt="Google"/>
                Log in with Google
            </a>
        </div>
        <div className="my-form__actions">
            <div className="my-form__row">
                <span>Inicio de Sesion Estudiantes</span>
            </div>
        </div>
    </form>
    </>
  );
}
