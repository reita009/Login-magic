
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';

//Components
import Header from './components/Header';
import Footer from './components/footer';
//Pages
import Home from "./Pages/Home";
import Config from "./Pages/Config";
import Login from "./Pages/Login";




function App() {

  const [user, setUser] = useState(null); 

  const actinLoginDataGoogle = async (u) =>{
      let newUser = {
          id: u.id,
          name: u.displayName,
          avatar: u.photoURL
      }

      setUser(newUser);
  }

    if(user === null){
       return(
        <Login onReceiveGoogle={ actinLoginDataGoogle } />
       )
    }

  return (
    <BrowserRouter>
         <Header user={user} />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/config" element={ <Config/> } />
            </Routes>
         <Footer />
    </BrowserRouter>
  )
}

export default App
