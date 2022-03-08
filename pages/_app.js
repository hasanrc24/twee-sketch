import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Home/Header/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return <div className="px-6 md:px-14 bg-[#3B3B3B] font-gothic">
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
