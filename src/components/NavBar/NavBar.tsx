// components/NavBar.tsx
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../lib/firebase";
import firebase from "firebase/compat/app";
import Logout from "../Auth/Logout";

const NavBar: React.FC = () => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const signInWithGoogle = async () => {
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {}
    };

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">FluffyFrenz</div>
            <div className="flex space-x-4">
                {/*<a href="#" className="text-white">Home</a>*/}
                {/* ... other nav links */}
                {user ? (
                    <>
                        <div className="text-white">
                            Welcome, {user.displayName || user.email}
                        </div>
                        <Logout />
                    </>
                ) : (
                    <button
                        onClick={signInWithGoogle}
                        className="px-4 py-2 font-bold text-white rounded hover:text-gray"
                    >
                        Sign in
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
