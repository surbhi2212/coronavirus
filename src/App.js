
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
// import Header from "./shared/Header/Header";
// import Footer from "./shared/Footer/Footer";
// import Page1 from "./Components/Page1";
// import Second from "./Components/Second";
// import Prevention from './Components/Prevention';
import Main from './Components/Main';
function App() {
  return (
    <div >
      <Router>
      <Routes>
      {/* <Route element={<Header/>} path={"/header"} />
      <Route element={<Footer/>} path={"/footer"} />
      <Route element={<Page1/>} path={"/one"} />
      <Route element={<Second/>} path={"/second"}/>
      <Route element={<Prevention/>} path={"/prevention"}/> */}
      <Route element={<Main/>} path={"/main"} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
