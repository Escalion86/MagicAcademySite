// import logo from './logo.svg';
import React, { useState, useEffect  } from 'react'

import './App.css';
import whatsappIcon from './img/whatsapp.png'
import viberIcon from './img/viber.png'
import headLogo from './img/HeadLogo.png'
import logoWhite from './img/logoWhite.png'
import background from "./img/background.jpg";
import merlin from "./img/merlin.png"
import aik from "./img/pers1.png"
import hat from "./img/hat.png"
import rabbit from "./img/rabbit.png"


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



const Button = ({text="", href="", newPage = false, inverse = false, big = false, addClass = ''}) => {
  const buttonStyle = inverse ?
  "bg-white border-primary hover:bg-primary transform hover:text-white text-primary" :
  "hover:bg-white hover:border-primary bg-primary transform text-white hover:text-primary" 
  return (
    <a href={href} target={newPage ? "_blank" : ""} rel="noreferrer">
      <button class={(big ? 'text-2xl ' : '') + "mx-1 duration-500 ease-in-out border transform hover:scale-105 font-bold py-2 px-4 rounded-3xl " + buttonStyle + (addClass ? (' ' + addClass) : '')}>{text}</button>      
    </a>
  )
}

const Burger = ({menuOpen, onClick}) => {
  return (
  <div class={"menu-btn" + (menuOpen ? ' open' : '')} onClick={onClick}>
    <div class="menu-btn__burger" />
  </div>)
}

const MenuItem = ({text = '', href=''}) => {
  return (
    <a class="p-4 font-bold text-white hover:text-active" href={href}>{text}</a>)
}

const MenuSeperator = ({text = '', href=''}) => {
  return (
    <div class="bg-white h-8 w-0.5 rounded" href={href}>{text}</div>)
}

const HeadPanel = ({menuOpen, onClick}) => {
  const { width } = useWindowDimensions()
  const deviceSize = (width<1024) ? ((width<640) ? 1 : 2) : 3 
  return (
    <div class={"relative w-full h-"+ (deviceSize <=2 ? 16 : 28) +" z-50"}>
      <div class="fixed bg-white">
        {deviceSize<=2 ?
        // Если маленький экран (планшет/телефон)
        <div class="w-screen h-16 px-8 flex flex-row items-center justify-between">
          <Burger menuOpen={menuOpen} onClick={onClick} />
          <div class="flex flex-row">
          {deviceSize === 2 ? <div class="flex flex-row">
          <a href="https://api.whatsapp.com/send?phone=79138370020" target="_blank" rel="noreferrer">
              <img class="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110" src={whatsappIcon} alt="whatsapp" />
            </a>
            <a href="viber://chat?number=79138370020" target="_blank" rel="noreferrer">
              <img class="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110" src={viberIcon} alt="viber" />
            </a>
            </div>
          : null}
          <a class="text-gray-800 text-3xl font-bold ml-4" href="tel:+79138370020" target="_blank" rel="noreferrer">+7-913-837-00-20</a>
          </div>
        </div>
        :
        // Если запущено с ПК
        <div>
        <div class="w-full h-16 px-8 flex flex-row items-center">
          {/* Телефон и чаты */}
          <div class="flex-1 flex flex-row items-center">
            <a class="text-gray-800 text-3xl font-bold mr-4" href="tel:+79138370020" target="_blank" rel="noreferrer">+7-913-837-00-20</a>
            <a href="https://api.whatsapp.com/send?phone=79138370020" target="_blank" rel="noreferrer">
              <img class="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110" src={whatsappIcon} alt="whatsapp" />
            </a>
            <a href="viber://chat?number=79138370020" target="_blank" rel="noreferrer">
              <img class="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110" src={viberIcon} alt="viber" />
            </a>
          </div>
          {/* Логотип */}
          <a href="https://magicacademykrsk.ru">
            <img class="object-fill h-12 mx-1" src={headLogo} alt="magicacademykrsk" />
          </a>
          {/* Кнопки */}
          <div class="flex-1 flex flex-row items-center justify-end">
            <Button text="Записаться" inverse />
            <Button text="Войти в личный кабинет" inverse />
          </div>
        </div>
          <div class="w-screen bg-primary h-12 px-8 flex flex-row items-center justify-center">
            <MenuItem text="Об академии" href='' />
            <MenuSeperator />
            <MenuItem text="Наша команда" href='' />
            <MenuSeperator />
            <MenuItem text="Абонементы" href='' />
            <MenuSeperator />
            <MenuItem text="Отзывы" href='' />
            <MenuSeperator />
            <MenuItem text="Расписание и филиалы" href='' />
            <MenuSeperator />
            <MenuItem text="Контакты" href='' />
          </div>
        </div>
}
      </div>
    </div>
  )
}

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div class="h-screen w-screen">
      <HeadPanel menuOpen={menuOpen} onClick={() => toggleMenu()} />

      {/* Титульный блок */}
      <div class="w-full">
        <div class="w-full relative z-10" style={{ position: 'relative', backgroundSize: "cover", backgroundPosition: "center", height: 620, backgroundImage: `url(${background})` }}>
          <div style={{position: 'absolute', top:25, left:50 }}>
            <a href="https://magicacademykrsk.ru/#merlin">
              <img class="object-fill mx-1" style={{height: 200}} src={merlin} alt="merlin" />
            </a>
          </div>
          <div class="w-full" align="center">
              <img class="object-fill mx-1 pt-5" style={{height: 200}} src={logoWhite} alt="magicacademy" />
              <h1 class="text-6xl text-white w-140 mt-10 text-center font-bold" style={{textShadow: "-5px -3px 2px rgba(76, 29, 149, 1)"}}>Школа фокусов и сценического искусства</h1>
              <h2 class="text-2xl w-100 mt-10 text-primary text-center">Уникальный кружок в <b>Красноярске</b></h2>
              <p class="text-3xl w-100 mt-6 text-primary text-center font-bold">НАБОР ДЕТЕЙ</p>
              <p class="text-3xl w-100 text-primary text-center font-bold">возрастом от 5 до 14 лет</p>
              <img class="object-fill mx-1 pt-5" style={{height: 480, position: 'absolute', top:260, right:0}} src={aik} alt="aik" />
          </div>
        
        </div>
        <div class="h-52 bg-white relative" align="center">
          <p class="text-3xl w-96 pt-6 text-primary text-center font-bold">Искусство иллюзии в шаговой доступности</p>
          <Button text="Посмотреть филиалы и расписание" big addClass="mt-6" />
          
          <a href="https://magicacademykrsk.ru/#rabbit">
            <img class="object-fill z-0" style={{height: 72, position: 'absolute', top:88, left:79, animation: "rabitt-up-down 4s", animationDelay: "5s", }} src={rabbit} alt="rabbit" />
          </a>
          <img class="object-fill z-1" style={{height: 110, position: 'absolute', top:83, left:56}} src={hat} alt="hat" />
            
            
        </div>
      </div>
      <div class="w-full bg-primary flex items-center justify-center" style={{height: 500}}>
        <iframe 
          width="780" 
          height="439"
          title="Magic Academy Promo" 
          src="https://youtu.be/V_70vMI5ShU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>

    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
