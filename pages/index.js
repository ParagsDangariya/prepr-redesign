import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import SubscribeOne from "../components/SubscribeOne";
import TeamOne from "../components/TeamOne";

const HomePage = () => (
  <Layout pageTitle="Prepr Labs">
    <Topbar />
    <NavOne />
    <SliderOne />
    <AboutTwo />
    <CourseOne />
    <BlogTwo />
    <TeamOne />
    <CallToActionThree />

    <BrandsTwo />
    <SubscribeOne />
    <Footer />
  </Layout>
);

export default HomePage;
