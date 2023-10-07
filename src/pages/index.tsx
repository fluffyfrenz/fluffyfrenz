import React from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import AppDownloadSection from "@/components/AppDownload/AppDownloadSection";
import MapComponent from "@/components/GoogleMap/MapComponent";
import ChatRoom from "@/components/Chat/ChatRoom";
import Footer from "@/components/Footer/Footer";

const Content: React.FC = () => {
    const { user } = useAuth();

    return (
        <section>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <AppDownloadSection />
            {user && (
                <>
                    <MapComponent />
                    <ChatRoom />
                </>
            )}
            <Footer />
        </section>
    );
};

const Home: React.FC = () => {
    return (
        <AuthProvider>
            <Content />
        </AuthProvider>
    );
};

export default Home;
