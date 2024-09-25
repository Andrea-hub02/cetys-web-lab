import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
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
      <header className="MainHeader">
        <div className="LHeaderContent">
          <Image
            src="/cetys-logo.png"
            alt="CETYS Logo."
            width={65}
            height={50}
          />
          <div className="dropdown">
            <button className="dropbtn">Laboratorio <RiArrowDropDownLine size={20} /> </button>
            <div className="dropdown-content">
              <a href="#">Manofactura</a>
              <a href="#">Electronica</a>
              <a href="#">Mecatronica</a>
              <a href="#">Renovables</a>
              <a href="#">Metodos</a>
              <a href="#">Fisica</a>
            </div>
          </div>
        </div>
        <div className="RHeaderContent">
          <button className="LoginButton">
            <div className="ButtonContent">
              <Image
                src="/user-icon.png"
                alt="User Icon"
                width={20}
                height={20}
              />
              <div>Iniciar Sesion</div>
            </div>
          </button>
          <IoIosHelpCircle size={30} />
        </div>
      </header>
      <div className="hero-image">
          <img src="/portada.png" alt="Imagen principal" />
      </div>
    </>
  );
}
