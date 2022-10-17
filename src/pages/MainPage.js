// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import { Link, Element } from 'react-scroll'

import useWindowDimensions from '../helpers/useWindowDimensions'
import findGetParameter from '../helpers/findGetParameter'

import HeadPanel from './blocks/HeadPanel'
import Title from './blocks/Title'
import WhatDoesItMeanToBeAWizard from './blocks/WhatDoesItMeanToBeAWizard'
import YoutubePromo from './blocks/YoutubePromo'
import FirstLessonFree from './blocks/FirstLessonFree'
import AboutMerlin from './blocks/AboutMerlin'
import Illusionists from './blocks/Illusionists'
import SplashScreen from './blocks/SplashScreen'

import './MainPage.css'
import OurTeam from './blocks/OurTeam'
import Footer from './blocks/Footer'
import Contacts from './blocks/Contacts'
import Calendar from './blocks/Calendar'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [splashShow, setSplashShow] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

  const codeId = findGetParameter('codeid')

  useEffect(() => {
    if (codeId === 'OTCQBR') {
      setSplashShow(true)
    }
  }, [codeId])

  const { width } = useWindowDimensions()
  const deviceSize = width >= 1024 ? 3 : width >= 640 ? 2 : 1

  return (
    <div className={'h-screen w-screen'}>
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
      <OurTeam deviceSize={deviceSize} />
      {splashShow ? (
        <SplashScreen
          deviceSize={deviceSize}
          buttonText="Искать кролика"
          onPressButton={() => {
            setSplashShow(false)
          }}
          // hrefButton={null}
          title="А ты внимательный!"
          text="Ты зашел на сайт с тестовым кодом и за свою внимательность и
          смекалку заслуживаешь награду! Найди на сайте кролика и ты её получишь!"
        />
      ) : null}
      <Calendar screenWidth={width} deviceSize={deviceSize} />
      <Contacts screenWidth={width} deviceSize={deviceSize} />
      <Footer deviceSize={deviceSize} />
    </div>
  )
}

export default MainPage
