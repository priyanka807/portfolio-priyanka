import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Try from "./components/try";
{/* <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> 
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>  */}
// | Database             | <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>    
function App() {
    return (
      <div className="App">
        <HeroBanner />
        {/* <Try/> */}
        {/* <AboutMe /> */}
        {/* <Index /> */}
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    );
}

export default App;
