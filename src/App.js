import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import SecondaryContainer from "./Components/SecondaryContainer";
const App = () => {
  return (
    <div className="bg-black h-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default App;
