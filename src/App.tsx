import Images from "@assets/images";
import Header from "@layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <img className="union" src={Images.union} alt="" />
    </>
  );
}

export default App;
