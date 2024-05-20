import Images from "@assets/images";
import Talents from "@components/Talents/Talents";
import Header from "@layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <img className="union" src={Images.union} alt="" />
      <Talents />
    </>
  );
}

export default App;
