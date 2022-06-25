import FeaturePage from "./components/feacture";
import HomePage from "./components/Home";
import IntroducingPage from "./components/introducting";

const App = () => {
 return (  
  <div className="container mx-auto">
  <HomePage/>
  <FeaturePage/>
  <IntroducingPage/>
  </div>
 );
}
 
export default App;