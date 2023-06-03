import Header from '../src/components/header'
import './App.css'
import { Route, Routes } from "react-router";
import Home from './pages/home';
import AboutUs from './pages/about_us';
import Discover from './pages/discover';
import Explore from './pages/explore';
import Shop from './pages/shop';
import Blog from './pages/blogs';
import ContactUs from './pages/contactus';
import Footer from './components/footer';
import NotFound from './pages/404';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about_us" element={<AboutUs />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
