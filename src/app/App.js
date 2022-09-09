import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from "./views/HomePage";

const App = () => {
  AOS.init();
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
