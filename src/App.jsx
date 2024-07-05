
import { useRef } from "react";
import "./App.css";
import Menu from "./Component/Menu/Menu";
import Navbar from "./Component/Navbar/Navbar";
import Herosection from "./Component/UI/Herosection";



function App() {
  const profil = useRef();
  const skils = useRef();
  const experince = useRef();
  const Certify = useRef();
  const Handlenavigation = () => {
      profil.current?.scrollIntoView({
        behavior: "smooth",
      })
  }

  const Handleskils = () => {
    skils.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const Handleexperince = () => {
     experince.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const Handlecertify = () => {
     Certify.current?.scrollIntoView({
     behavior: "smooth",
   })
 }
  return (
    <>
      <Navbar
      Handlenavigation={Handlenavigation} 
      Handleskils={Handleskils} 
      Handleexperince={Handleexperince}
      Handlecertify={Handlecertify}
      ></Navbar>
      <Herosection></Herosection>
      <Menu
       profil={profil}
       skils={skils}
       experince={experince}
       Certify={Certify}
       ></Menu>
    </>
  );
}

export default App;
