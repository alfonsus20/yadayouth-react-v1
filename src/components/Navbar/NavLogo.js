import React from "react";
import YadaYouthLogo from '../../assets/yadayouthlogo.png'

const NavLogo = ({toggleMenu, menu}) => {
  return (
    <div className = 'flex flex-row items-center'>
      <img src={YadaYouthLogo} alt="yada-youth-logo" />
      <i onClick = {()=>toggleMenu(!menu)} className="fas fa-bars text-2xl ml-auto block md:hidden"></i>
    </div>
  );
};

export default NavLogo;