'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export const NavbarMobile = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleDocumentClick = (event: any) => {
        const optionsContainerMobile = document.querySelector(
            ".navBar__menu-mobile"
        );
        if (
            optionsContainerMobile &&
            !optionsContainerMobile.contains(event.target)
        ) {
            setOpenMenu(false);
        }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
        document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className="navBar__menu-mobile">
            <button
                className={`navBar__menu-mobile__hamburger ${openMenu ? "--open" : ""}`}
                onClick={handleOpenMenu}
            >
                <svg viewBox="0 0 32 32">
                <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
                </svg>
            </button>
            <div
                className={`navBar__menu-mobile__content-menu ${
                openMenu ? "--open" : ""
                }`}
            >
                <ul className="navBar__menu-mobile__options-list">
                    <li>
                        <Link href="/" onClick={handleLinkClick}>
                        Inicio
                        </Link>
                    </li>
                    <li>
                        <button onClick={toggleSubMenu}>
                            Trabajos
                            {isSubMenuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </button>
                        <ol
                            className={`navBar__menu-mobile__options-list ${
                                isSubMenuOpen ? "--open" : ""
                            }`}
                        >
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
                </ul>
            </div>
        </div>
    );
};
