import Navbar from "../components/header/navbar/Navbar";
import SectionOne from "../components/main/sectionOne/SectionOne";
import SectionTwo from "../components/main/sectionTwo/SectionTwo";
import SectionThree from "../components/main/sectionThree/SectionThree";
import SectionFour from "../components/main/sectionFour/SectionFour";
import SectionFive from "../components/main/sectionFive/SectionFive";
import SectionSix from "../components/main/sectionSix/SectionSix";
import SectionSeven from "../components/main/sectionSeven/SectionSeven";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    return (
      <>
        <header>
            <Navbar/>
        </header>
        <main>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
    )
}
export default HomePage;