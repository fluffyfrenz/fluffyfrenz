// components/AuthModal.tsx

import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../../lib/firebase";
import firebase from "firebase/compat/app";
import { FaGooglePlus, FaFacebook, FaLinkedin } from 'react-icons/fa';
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
                <h2>fluffz</h2>
                <p>Your Pups New Favorite App! 🐾</p>

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
                <div>
                <button onClick={signInWithEmail} className={styles.button}>
                    LOG IN
                </button>
                </div>
                <div>
                <button onClick={signUpWithEmail} className={styles.button}>
                    CREATE ACCOUNT
                </button>
                </div>

                <div>
                    <button type="button" onClick={signInWithGoogle} className={styles.button} aria-label="Sign in with Google">
                        <FaGooglePlus size={24}/>
                    </button>
                    <button type="button" className={styles.button} aria-label="Sign in with Facebook">
                        <FaFacebook size={24}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
