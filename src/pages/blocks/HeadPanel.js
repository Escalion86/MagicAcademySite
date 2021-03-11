import React from "react";
import { Link } from "react-scroll";

import "./HeadPanel.css";

import headLogo from "../../img/HeadLogo.png";
import whatsappIcon from "../../img/whatsapp.png";
import viberIcon from "../../img/viber.png";

import Button from "../../components/Button";

const menuItems = [
  { name: "Об академии", href: "about" },
  { name: "Наша команда", href: "" },
  { name: "Абонементы", href: "" },
  { name: "Отзывы", href: "" },
  { name: "Расписание и филиалы", href: "" },
  { name: "Контакты", href: "" },
];

const Burger = ({ menuOpen, onClick }) => {
  return (
    <div className={"menu-btn" + (menuOpen ? " open" : "")} onClick={onClick}>
      <div className="menu-btn__burger" />
    </div>
  );
};

const MenuItem = ({ text = "", href = "" }) => {
  return (
    <Link
      activeClass="active"
      className="p-4 text-base font-bold text-white hover:text-active cursor-pointer"
      to={href}
      spy={true}
      smooth={true}
      duration={500}
      offset={-114}
    >
      {text}
    </Link>
  );
};

const MenuSeperator = ({ text = "", href = "" }) => {
  return (
    <div className="bg-white h-8 w-0.5 rounded" href={href}>
      {text}
    </div>
  );
};

const HeadPanel = ({
  menuOpen = false,
  onClick = () => {},
  closeMenu = () => {},
  deviceSize = 3,
}) => {
  const MenuItemsPC = menuItems.map(({ name, href }, index) => {
    if (index === menuItems.length - 1) {
      return <MenuItem key={"menuItem" + index} text={name} href={href} />;
    } else {
      return (
        <>
          <MenuItem key={"menuItem" + index} text={name} href={href} />
          <MenuSeperator key={"separator" + index} />
        </>
      );
    }
  });

  const MenuItemsMobile = menuItems.map(({ name = "", href = "" }, index) => {
    return (
      <Link
        activeClass="active"
        className={
          (deviceSize === 2 ? "text-4xl" : "text-3xl") +
          " z-1 block my-6 font-bold text-primary hover:text-active cursor-pointer"
        }
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-114}
        onClick={closeMenu}
        key={"menuItemMobile" + index}
      >
        {name}
      </Link>
      // <a className="z-1 font-bold text-primary hover:text-active" href={href}>
      //   {name}
      // </a>
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
              <div className="w-full bg-white h-16 px-6 flex flex-row items-center justify-between z-50">
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
                    className={
                      (deviceSize >= 2 ? " text-3xl" : "text-2xl") +
                      " text-text font-bold ml-4"
                    }
                    href="tel:+79138370020"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +7-913-837-00-20
                  </a>
                </div>
              </div>
              <div
                className={
                  "absolute z-1 flex flex-col items-center justify-center overlay" +
                  (menuOpen ? " open" : "")
                }
              >
                <div className="overlay-content overflow-hidden">
                  {MenuItemsMobile}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Если запущено с ПК
          <>
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
                <Button text="Записаться" href="/" inverse />
                <Button text="Войти в личный кабинет" href="/login" inverse />
              </div>
            </div>
            <div className="w-screen bg-primary h-12 px-8 flex flex-row items-center justify-center">
              {MenuItemsPC}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeadPanel;
