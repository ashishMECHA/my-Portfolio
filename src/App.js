
import NavBar from './Components/navbar/NavBar';
import Header from './Components/header/header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
import Skills from './Components/skills/Skills';



function App() {
  return (
    <>
    <BrowserRouter>
    {/* <NavBar/> */}
      {/* <Header/> */}
      <Routes>
        <Route path="/" element = {<Header/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/resume" element = {<Resume/>}/>
        <Route path="/about" element = {<Skills/>}/>

      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
