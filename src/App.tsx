import Images from "@assets/images";
import Information from "@components/Information/Information";
import Header from "@layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <img className="union" src={Images.union} alt="" />
      <Information />
    </>
  );
}

export default App;
