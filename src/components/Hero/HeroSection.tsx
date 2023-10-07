// components/Hero.tsx
import React from "react";
import styles from "@/styles/Hero.module.css";

const HeroSection: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div>
                <h1 className={styles.title}>Welcome to FluffyFrenz!</h1>
                <p className={styles.subtitle}>
                    Your furry friends favorite social network.
                </p>
                <button className={styles.heroButton}>Get Started</button>
            </div>
        </section>
    );
};

export default HeroSection;
