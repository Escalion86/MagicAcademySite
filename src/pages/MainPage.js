// import logo from './logo.svg';
import React, { useState } from "react";
import { Link, Element } from "react-scroll";

import useWindowDimensions from "../helpers/useWindowDimensions";

import HeadPanel from "./blocks/HeadPanel";
import Title from "./blocks/Title";
import WhatDoesItMeanToBeAWizard from "./blocks/WhatDoesItMeanToBeAWizard";
import YoutubePromo from "./blocks/YoutubePromo";
import FirstLessonFree from "./blocks/FirstLessonFree";
import AboutMerlin from "./blocks/AboutMerlin";
import Illusionists from "./blocks/Illusionists";

import "./MainPage.css";

// const Anchor = ({ name = "" }) => {
//   return (
//     <a
//       name={name}
//       style={{
//         display: "block",
//         position: "relative",
//         top: -112,
//         visibility: "hidden",
//       }}
//     />
//   );
// };

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const { width } = useWindowDimensions();
  const deviceSize = width >= 1024 ? 3 : width >= 640 ? 2 : 1;

  return (
    <div className={"h-screen w-screen"}>
      <HeadPanel
        menuOpen={menuOpen}
        onClick={() => toggleMenu()}
        closeMenu={() => closeMenu()}
        deviceSize={deviceSize}
      />
      <Element name="about" />
      <Title deviceSize={deviceSize} />
      <YoutubePromo screenWidth={width} />
      <WhatDoesItMeanToBeAWizard deviceSize={deviceSize} />
      <Illusionists deviceSize={deviceSize} />
      <FirstLessonFree deviceSize={deviceSize} />
      <AboutMerlin deviceSize={deviceSize} />
    </div>
  );
};

export default MainPage;
