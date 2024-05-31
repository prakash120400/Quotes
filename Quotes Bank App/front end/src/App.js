import React from "react";
import'./App.css'
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/home";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Tags from "./pages/tags";
import Show from "./pages/show";
function App(){
  return (
<div className="App">
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/tags' Component={Tags}/>
    {/* <Route exact path='/Show' Component={Show}/> */}
  </Routes>
  <Footer/>
  </BrowserRouter> 
</div>
  )
}

export default App
