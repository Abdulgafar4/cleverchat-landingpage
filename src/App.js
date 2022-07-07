import CommunityPage from "./components/chatapp";
import ContactReview from "./components/contact";
//import FeaturePage from "./components/feacture";
import FooterPage from "./components/footer";
import HomePage from "./components/Home";
//import IntroducingPage from "./components/introducting";
import TestimonyPage from "./components/testimony";

const App = () => {
 return (  
  <div className="container mx-auto">
  <HomePage/>
  <ContactReview/>
  <CommunityPage/>
  <FooterPage/>
  </div>
 );
}
 
export default App;