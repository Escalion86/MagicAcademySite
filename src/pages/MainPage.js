// import logo from './logo.svg';
import React, { useState, useEffect } from "react";

import "./MainPage.css";
import whatsappIcon from "../img/whatsapp.png";
import viberIcon from "../img/viber.png";
import headLogo from "../img/HeadLogo.png";
import logoWhite from "../img/logoWhite.png";
import background from "../img/background.jpg";
import background2 from "../img/background2.jpg";
import merlin from "../img/merlin.png";
import aik from "../img/pers1.png";
import aik2_noeye from "../img/pers2-noeye.png";
import eyes from "../img/eyes.png";
import hat from "../img/hat.png";
import rabbit from "../img/rabbit.png";
import pic1 from "../img/pic1.jpg";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
import kio from "../img/kio.jpg";
import copperfield from "../img/copperfield.jpg";
import gudini from "../img/gudini.png";
import akopan from "../img/akopan.jpg";

const menuItems = [
  { name: "Об академии", href: "#about" },
  { name: "Наша команда", href: "" },
  { name: "Абонементы", href: "" },
  { name: "Отзывы", href: "" },
  { name: "Расписание и филиалы", href: "" },
  { name: "Контакты", href: "" },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Button = ({
  text = "",
  href = "",
  newPage = false,
  inverse = false,
  big = false,
  bigText = false,
  addClass = "",
}) => {
  const buttonStyle = inverse
    ? "bg-white border-primary hover:bg-primary transform hover:text-white text-primary"
    : "hover:bg-white hover:border-primary bg-primary transform text-white hover:text-primary";
  return (
    <a href={href} target={newPage ? "_blank" : ""} rel="noreferrer">
      <button
        className={
          (bigText ? "text-2xl " : "") +
          "mx-1 duration-500 ease-in-out border transform hover:scale-105 font-bold rounded-3xl " +
          (big ? "py-6 px-8 " : "py-2 px-4 ") +
          buttonStyle +
          (addClass ? " " + addClass : "")
        }
      >
        {text}
      </button>
    </a>
  );
};

const Burger = ({ menuOpen, onClick }) => {
  return (
    <div className={"menu-btn" + (menuOpen ? " open" : "")} onClick={onClick}>
      <div className="menu-btn__burger" />
    </div>
  );
};

const MenuItem = ({ text = "", href = "" }) => {
  return (
    <a className="p-4 font-bold text-white hover:text-active" href={href}>
      {text}
    </a>
  );
};

const MenuSeperator = ({ text = "", href = "" }) => {
  return (
    <div className="bg-white h-8 w-0.5 rounded" href={href}>
      {text}
    </div>
  );
};

const HeadPanel = ({ menuOpen, onClick }) => {
  const { width } = useWindowDimensions();
  const deviceSize = width < 1024 ? (width < 640 ? 1 : 2) : 3;

  const MenuItemsPC = menuItems.map(({ name, href }, index) => {
    if (index === menuItems.length - 1) {
      return <MenuItem text={name} href={href} />;
    } else {
      return (
        <>
          <MenuItem text={name} href={href} />
          <MenuSeperator />
        </>
      );
    }
  });

  const MenuItemsMobile = menuItems.map(({ name, href }) => {
    return (
      <a class="z-1 font-bold text-primary hover:text-active" href={href}>
        {name}
      </a>
    );
  });

  return (
    <div
      className={"relative w-full h-" + (deviceSize <= 2 ? 16 : 28) + " z-50"}
    >
      <div className="fixed bg-white">
        {deviceSize <= 2 ? (
          // Если маленький экран (планшет/телефон)
          <div>
            <div className="w-screen h-16 flex flex-col">
              <div className="w-full bg-white h-16 px-8 flex flex-row items-center justify-between z-50">
                <Burger menuOpen={menuOpen} onClick={onClick} />
                <div className="flex flex-row">
                  {deviceSize === 2 ? (
                    <div className="flex flex-row">
                      <a
                        href="https://api.whatsapp.com/send?phone=79138370020"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110"
                          src={whatsappIcon}
                          alt="whatsapp"
                        />
                      </a>
                      <a
                        href="viber://chat?number=79138370020"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110"
                          src={viberIcon}
                          alt="viber"
                        />
                      </a>
                    </div>
                  ) : null}
                  <a
                    className="text-text text-3xl font-bold ml-4"
                    href="tel:+79138370020"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +7-913-837-00-20
                  </a>
                </div>
              </div>
              <div
                class={
                  "absolute z-1 flex flex-col items-center justify-center overlay" +
                  (menuOpen ? " open" : "")
                }
              >
                <div class="overlay-content">{MenuItemsMobile}</div>
              </div>
            </div>
          </div>
        ) : (
          // Если запущено с ПК
          <div>
            <div className="w-full h-16 px-8 flex flex-row items-center">
              {/* Телефон и чаты */}
              <div className="flex-1 flex flex-row items-center">
                <a
                  className="text-text text-3xl font-bold mr-4"
                  href="tel:+79138370020"
                  target="_blank"
                  rel="noreferrer"
                >
                  +7-913-837-00-20
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=79138370020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110"
                    src={whatsappIcon}
                    alt="whatsapp"
                  />
                </a>
                <a
                  href="viber://chat?number=79138370020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="object-fill w-10 h-10 mx-1 duration-500 ease-in-out transform hover:scale-110"
                    src={viberIcon}
                    alt="viber"
                  />
                </a>
              </div>
              {/* Логотип */}
              <a href="https://magicacademykrsk.ru">
                <img
                  className="object-fill h-12 mx-1"
                  src={headLogo}
                  alt="magicacademykrsk"
                />
              </a>
              {/* Кнопки */}
              <div className="flex-1 flex flex-row items-center justify-end">
                <Button text="Записаться" inverse />
                <Button text="Войти в личный кабинет" inverse />
              </div>
            </div>
            <div className="w-screen bg-primary h-12 px-8 flex flex-row items-center justify-center">
              {MenuItemsPC}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoBlock = ({ src = null, alt = "", title = "", text = "" }) => {
  return (
    <div className="w-full h-100 flex flex-col items-center">
      <img
        className="object-fill border-primary border-4 rounded-3xl"
        style={{ height: 160, wigth: 160 }}
        src={src}
        alt={alt}
      />
      <p className="text-2xl w-full pt-5 text-primary text-center font-bold">
        {title}
      </p>
      <p className="text-xl w-full pt-2 text-text text-center">{text}</p>
    </div>
  );
};

const Illusionist = ({ src = null, alt = "", href = "" }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className="object-fill rounded-3xl shadow-extra ease-in-out duration-500 transform hover:scale-105 "
        style={{ height: 160, wigth: 160 }}
        src={src}
        alt={alt}
      />
    </a>
  );
};

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-screen w-screen">
      <HeadPanel menuOpen={menuOpen} onClick={() => toggleMenu()} />

      {/* Титульный блок */}
      <div className="w-full">
        <div
          className="w-full relative z-10"
          style={{
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 620,
            backgroundImage: `url(${background})`,
          }}
        >
          <div style={{ position: "absolute", top: 25, left: 50 }}>
            <a href="https://magicacademykrsk.ru/#merlin">
              <img
                className="object-fill mx-1"
                style={{ height: 200 }}
                src={merlin}
                alt="merlin"
              />
            </a>
          </div>
          <div className="w-full" align="center">
            <img
              className="object-fill mx-1 pt-5"
              style={{ height: 200 }}
              src={logoWhite}
              alt="magicacademy"
            />
            <h1
              className="text-6xl text-white w-140 mt-10 text-center font-bold"
              style={{ textShadow: "-5px -3px 2px rgba(76, 29, 149, 1)" }}
            >
              Школа фокусов и сценического искусства
            </h1>
            <h2 className="text-2xl w-100 mt-10 text-primary text-center">
              Уникальный кружок в <b>Красноярске</b>
            </h2>
            <p className="text-3xl w-100 mt-6 text-primary text-center font-bold">
              НАБОР ДЕТЕЙ
            </p>
            <p className="text-3xl w-100 text-primary text-center font-bold">
              возрастом от 5 до 14 лет
            </p>
            <img
              className="object-fill mx-1 pt-5"
              style={{ height: 480, position: "absolute", top: 260, right: 0 }}
              src={aik}
              alt="aik"
            />
          </div>
        </div>
        <div className="h-52 bg-white relative" align="center">
          <p className="text-3xl w-96 pt-6 text-primary text-center font-bold">
            Искусство иллюзии в шаговой доступности
          </p>
          <Button
            text="Посмотреть филиалы и расписание"
            bigText
            addClass="mt-6"
          />

          <a href="https://magicacademykrsk.ru/#rabbit">
            <img
              className="object-fill z-0"
              style={{
                height: 72,
                position: "absolute",
                top: 88,
                left: 79,
                animation: "rabitt-up-down 4s",
                animationDelay: "5s",
              }}
              src={rabbit}
              alt="rabbit"
            />
          </a>
          <img
            className="object-fill z-1"
            style={{ height: 110, position: "absolute", top: 83, left: 56 }}
            src={hat}
            alt="hat"
          />
        </div>
      </div>
      <div
        className="w-full bg-primary flex items-center justify-center"
        style={{ height: 500 }}
      >
        <iframe
          width="780"
          height="439"
          title="Magic Academy Promo"
          src="https://youtu.be/V_70vMI5ShU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div
        className="w-full bg-white flex items-center flex-col"
        style={{ height: 830 }}
      >
        <p className="text-3xl w-96 pt-6 text-primary text-center font-bold">
          Что значит быть волшебником
        </p>
        <div className="flex">
          <div className="w-64">
            <InfoBlock
              src={pic1}
              alt="pic1"
              title="Выступать на телевидении"
              text="Наши ученики уже с 6 лет выступают в прямых эфирах"
            />
            <InfoBlock
              src={pic3}
              alt="pic3"
              title="Стать примером для подражания"
              text="Участвовать и побеждать в творческих турнирах"
            />
          </div>
          <div className="w-100 flex flex-col items-center z-10">
            <p className="text-2xl w-full pt-6 text-text text-center">
              Раскроем таланты вашего ребенка и зажжем новую звезду
            </p>
            <div className="relative mt-10" style={{ width: 332 }}>
              <img
                className="object-fill pt-5"
                style={{ width: 343, position: "absolute", top: 0 }}
                src={aik2_noeye}
                alt="aik2"
              />
              <img
                className="object-fill ease-in-out "
                style={{
                  width: 88,
                  position: "absolute",
                  top: 156,
                  left: 124,
                  animation: "eyes 2.2s",
                  animationIterationCount: "infinite",
                }}
                src={eyes}
                alt="eyes"
              />
            </div>
          </div>
          <div className="w-64">
            <InfoBlock
              src={pic2}
              alt="pic2"
              title="Быть в центре внимания"
              text="Легко держаться на сцене и уверенно выступать перед публикой"
            />
            <InfoBlock
              src={pic4}
              alt="pic4"
              title="Удивлять и завораживать"
              text="Стать юным мастером иллюзионного искусства"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full flex justify-center py-6"
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 420,
          backgroundImage: `url(${background2})`,
        }}
      >
        <div className="flex items-center flex-col justify-evenly h-full">
          <Illusionist
            src={kio}
            alt="kio"
            href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BE,_%D0%98%D0%B3%D0%BE%D1%80%D1%8C_%D0%AD%D0%BC%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87"
          />
          <Illusionist
            src={gudini}
            alt="gudini"
            href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%93%D1%83%D0%B4%D0%B8%D0%BD%D0%B8"
          />
        </div>
        <div className="w-140 flex flex-col items-center mx-6">
          <p className="text-3xl w-full pt-6 text-primary text-center font-bold">
            Копперфильд, Кио, Гудини, Акопян - вам знакомы эти фамилии?
          </p>
          <p className="text-3xl w-full pt-10 text-primary text-center">
            Все они изучали искусство фокусов и иллюзии с раннего возраста и
            стали мировыми звездами!
          </p>
          <p className="text-xl w-full pt-20 text-text text-center">
            Кликни на фото, чтобы узнать о них подробнее
          </p>
        </div>
        <div className="flex items-center flex-col justify-evenly h-full">
          <Illusionist
            src={copperfield}
            alt="copperfield"
            href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%BF%D0%B5%D1%80%D1%84%D0%B8%D0%BB%D1%8C%D0%B4,_%D0%94%D1%8D%D0%B2%D0%B8%D0%B4_(%D0%B8%D0%BB%D0%BB%D1%8E%D0%B7%D0%B8%D0%BE%D0%BD%D0%B8%D1%81%D1%82)"
          />
          <Illusionist
            src={akopan}
            alt="akopan"
            href="https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D0%BE%D0%BF%D1%8F%D0%BD,_%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD_%D0%90%D0%BC%D0%B0%D1%8F%D0%BA%D0%BE%D0%B2%D0%B8%D1%87"
          />
        </div>
      </div>
      <div
        className="w-full bg-white flex flex-col items-center justify-center"
        style={{ height: 420 }}
      >
        <p className="text-3xl w-full text-text text-center font-bold">
          Первое занятие БЕСПЛАТНО!
        </p>
        <p className="text-2xl pt-5 text-text text-center max-w-xl">
          Мы даем Вам возможность попробовать первое занятие, после которого вы
          сможете принять решение о дальнейшем посещении
        </p>
        <Button
          text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК"
          big
          bigText
          addClass="mt-8"
        />
      </div>
      <div
        className="w-full bg-primary flex items-center justify-center"
        style={{ height: 420 }}
      >
        <p className="text-3xl w-full text-text text-center font-bold">
          Первое занятие БЕСПЛАТНО!
        </p>
        <p className="text-2xl pt-5 text-text text-center max-w-xl">
          Мы даем Вам возможность попробовать первое занятие, после которого вы
          сможете принять решение о дальнейшем посещении
        </p>
        <Button
          text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК"
          big
          bigText
          addclassName="mt-8"
        />
      </div>
    </div>
  );
};

export default Main;
