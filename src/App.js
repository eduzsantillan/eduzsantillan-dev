import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar';
import Banner from './component/Banner';
import { Skills } from './component/Skills';
import { Footer } from './component/Footer';
import { Contact } from './component/Contact';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App; 
