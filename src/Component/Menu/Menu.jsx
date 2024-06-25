import React from "react";
import Background from "../Fragments/Background";
import Profil from "../UI/profil";
import Certificates from "../UI/Certificates";
import Footer from "../UI/Footer";
const Menu = () => {
  return (
    <>
      <div className="laptop:mt-12 pb-8 ">
        <Profil></Profil>
      </div>
      <div className="mt-12">
        <Background></Background>
      </div>
    </>
  );
};

export default Menu;
