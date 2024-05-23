// import Images from "@assets/images";
import Reviews from "@components/Reviews/Reviews";
import Start from "@components/Start/Start";
import Strategy from "@components/Strategy/Strategy";
import WhyChooseUs from "@components/WhyChooseUs/WhyChooseUs";
import Faq from "@layouts/Faq/Faq";
import Footer from "@layouts/Footer/Footer";
import Header from "@layouts/Header/Header";
import TechStack from "@components/TechStack/TechStack";

function App() {
  return (
    <>
      <Header />
      {/* <div className="stripe-container">
        <img className="stripe" src={Images.stripe} alt="" />
      </div> */}
      <TechStack />
      <Reviews />
      <Strategy />
      <Start />
      <WhyChooseUs />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
