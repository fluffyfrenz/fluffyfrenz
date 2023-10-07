// components/Header.tsx
import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "@/styles/Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <NavBar />
        </div>
    );
};

export default Header;
