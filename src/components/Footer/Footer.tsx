// components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-blue-500 text-white p-10">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">FluffyFrenz</h2>
            <p>Contact: info@fluffyfrenz.com</p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white">Facebook</a>
            <a href="#" className="text-white">Twitter</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  