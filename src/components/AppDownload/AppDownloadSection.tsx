// components/AppDownloadSection.tsx
import React from "react";
import styles from "@/styles/AppDownload.module.css";

const AppDownloadSection: React.FC = () => {
    return (
        <section className={styles.appdownload}>
            <div>
                <h2>Available for Android and iOS</h2>
                {/* Placeholder for app store buttons */}
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
