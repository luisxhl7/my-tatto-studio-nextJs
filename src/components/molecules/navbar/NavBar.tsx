"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  AccountCircle,
} from "@mui/icons-material";
import { useMobileDetect } from "@/hook";

import { NavbarMobile } from "./Navbar-mobile";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout_thunks, validateUser_thunks } from "@/store/thunks/auth";
import images from "@/assets";
import "./navBar.scss";

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter()
  const { status, user } = useAppSelector((state) => state.auth);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [optionsUserOpen, setOptionsUserOpen] = useState<boolean>(false);
  const { isMobile } = useMobileDetect();

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleOnLogout = async() => {
    const resp = await dispatch(logout_thunks())

    if (resp) {
      navigate.replace('/')
    } 
  }
  const handleOpenOptionsUser = () => {
    setOptionsUserOpen(!optionsUserOpen)
  }

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      const subMenuContainer = document.querySelector(".navBar__options-list");
      if (subMenuContainer && !subMenuContainer.contains(event.target)) {
        setIsSubMenuOpen(false);
        setOptionsUserOpen(false);
      } 
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    dispatch(validateUser_thunks());
  }, []);

  return (
    <nav className="navBar">
      <Link href="/" className="navBar__logo">
        <Image src={images.icono_tattoo} alt="" width={70} height={70} />
      </Link>
      {!isMobile ? (
        <ul className="navBar__options-list">
          <li>
            <Link href="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li
            className={
              isSubMenuOpen ? "navBar__sub-Menu --open" : "navBar__sub-Menu"
            }
            onClick={toggleSubMenu}
          >
            Trabajos
            {isSubMenuOpen ? (
              <KeyboardArrowUp
                onClick={() => () => {
                  window.alert("funciona");
                }}
              />
            ) : (
              <KeyboardArrowDown />
            )}
            <ol>
              <li>
                <Link href="/tatuador/keneth" onClick={handleLinkClick}>
                  {" "}
                  Keneth{" "}
                </Link>
              </li>
              <li>
                <Link href="/tatuador/luis" onClick={handleLinkClick}>
                  {" "}
                  luis{" "}
                </Link>
              </li>
              <li>
                <Link href="/tatuador/veronica" onClick={handleLinkClick}>
                  {" "}
                  veronica{" "}
                </Link>
              </li>
              <li>
                <Link href="/tatuador/yeison" onClick={handleLinkClick}>
                  {" "}
                  yeison{" "}
                </Link>
              </li>
              <li>
                <Link href="/tatuador/juan" onClick={handleLinkClick}>
                  {" "}
                  juan{" "}
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <Link href="/cuidados" onClick={handleLinkClick}>
              Cuidados
            </Link>
          </li>
          <li>
            <Link href="/agenda" onClick={handleLinkClick}>
              Agenda
            </Link>
          </li>
          <li className="navBar__content-login">

            {user && status === "authenticated" && "name" in user ? (
              <div className="navBar__content-login-user" onClick={handleOpenOptionsUser}>
                <span>{user.name}</span>
                <AccountCircle />
                <div className={`navBar__content-login-user__options ${optionsUserOpen ? '--isOpen' : ''}`}>
                  <button onClick={handleOnLogout}>cerrar sesión</button>
                </div>
              </div>
            ) : (
              <Link href="/auth/login" className="button-login">
                {status === "checking" ? "Cargando" : "Login"}
              </Link>
            )}
          </li>
        </ul>
      ) : (
        <NavbarMobile />
      )}
    </nav>
  );
};
