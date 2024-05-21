import Images from "@assets/images";
import Information from "@components/TechStack/TechStack";
// import Reviews from "@components/Reviews/Reviews";
// import Start from "@components/Start/Start";
// import Strategy from "@components/Strategy/Strategy";
// import WhyChooseUs from "@components/WhyChooseUs/WhyChooseUs";
// import Faq from "@layouts/Faq/Faq";
// import Footer from "@layouts/Footer/Footer";
import Header from "@layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <img className="union" src={Images.union} alt="" />
      <Information />
      {/* 
      <Reviews />
      <Strategy />
      <Start />
      <WhyChooseUs />
      <Faq />
      <Footer /> */}
    </>
  );
}

export default App;
