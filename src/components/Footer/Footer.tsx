import styles from "./Footer.module.css";

// Assuming you're using a package like "react-icons", but you can replace with your own method of importing icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p>@2023 fluffyfrenz</p>
            </div>
            <div className={styles.socials}>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                    <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter profile">
                    <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
