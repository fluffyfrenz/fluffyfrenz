// components/AuthModal.tsx

import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../../lib/firebase";
import firebase from "firebase/compat/app";
import styles from "./AuthModal.module.css";

type AuthModalProps = {
    onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithEmail = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    };

    const signUpWithEmail = async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.error("Error signing up: ", error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleProvider);
        } catch (error) {}
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.authModal}
                onClick={(e) => e.stopPropagation()}
            >
                {" "}
                {/* This prevents the modal from closing when clicking inside */}
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Welcome</h2>
                <p>Sign in to continue</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                />
                <button onClick={signInWithEmail} className={styles.button}>
                    Sign in
                </button>
                <button onClick={signUpWithEmail} className={styles.button}>
                    Sign up
                </button>
                <p>Or sign in with</p>
                <button onClick={signInWithGoogle} className={styles.button}>
                    Google
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
