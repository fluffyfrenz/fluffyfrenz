// components/NavBar.tsx
import React, { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import firebase from "firebase/compat/app";
import Logout from "../Auth/Logout";
import AuthModal from "../Auth/AuthModal";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user) {
                setShowModal(false);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [user]);

    return (
        <nav className={styles.nav}>
            <div>FluffyFrenz</div>
            <div>
                {/* ... other nav links */}
                {user ? (
                    <>
                        <div>
                            Welcome, {user.displayName || user.email}
                            <Logout />
                        </div>
                        
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setShowModal(true)}
                            className={styles.signInButton}
                        >
                            Sign in
                        </button>
                        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
