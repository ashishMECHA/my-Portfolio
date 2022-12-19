
import NavBar from './Components/navbar/NavBar';
import Header from './Components/header/header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './Components/projects/Projects';



function App() {
  return (
    <>
    <BrowserRouter>
    {/* <NavBar/> */}
      {/* <Header/> */}
      <Routes>
        <Route path="/" element = {<Header/>}/>
        <Route path="/projects" element = {<Projects/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
