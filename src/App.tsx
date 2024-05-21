import Images from "@assets/images";
import Information from "@components/Information/Information";
import Footer from "@layouts/Footer/Footer";
import Header from "@layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <img className="union" src={Images.union} alt="" />
      <Information />
      <Footer />
    </>
  );
}

export default App;
