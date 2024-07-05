import React from "react";
import Background from "../Fragments/Background";
const Menu = ({profil, skils, experince, Certify}) => {
  return (
    <>
        <Background profil={profil} skils={skils} experince={experince} Certify={Certify}></Background>
    </>
  );
};

export default Menu;
