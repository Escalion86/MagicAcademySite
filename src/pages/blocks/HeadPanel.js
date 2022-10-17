import React from 'react'
import { Link } from 'react-scroll'

import './HeadPanel.css'

import headLogo from '../../img/HeadLogo.png'
import whatsappIcon from '../../img/whatsapp.png'
import viberIcon from '../../img/viber.png'

import Button from '../../components/Button'

const menuItems = [
  { name: 'Об академии', href: 'promo' },
  { name: 'Наша команда', href: 'team' },
  // { name: 'Абонементы', href: '' },
  // { name: 'Отзывы', href: '' },
  { name: 'Расписание', href: 'calendar' },
  { name: 'Контакты', href: 'contacts' },
]

const Burger = ({ menuOpen, onClick }) => {
  return (
    <div className={'menu-btn' + (menuOpen ? ' open' : '')} onClick={onClick}>
      <div className="menu-btn__burger" />
    </div>
  )
}

const MenuItem = ({ text = '', href = '' }) => {
  return (
    <Link
      activeClass="active"
      className="p-4 text-base font-bold text-white cursor-pointer hover:text-active"
      to={href}
      spy={true}
      smooth={true}
      duration={500}
      offset={-114}
    >
      {text}
    </Link>
  )
}

const MenuSeperator = ({ text = '', href = '' }) => {
  return (
    <div className="bg-white h-8 w-0.5 rounded" href={href}>
      {text}
    </div>
  )
}

const HeadPanel = ({
  menuOpen = false,
  onClick = () => {},
  closeMenu = () => {},
  deviceSize = 3,
}) => {
  const MenuItemsPC = menuItems.map(({ name, href }, index) => {
    if (index === menuItems.length - 1) {
      return <MenuItem key={'menuItem' + index} text={name} href={href} />
    } else {
      return (
        <>
          <MenuItem key={'menuItem' + index} text={name} href={href} />
          <MenuSeperator key={'separator' + index} />
        </>
      )
    }
  })

  const MenuItemsMobile = menuItems.map(({ name = '', href = '' }, index) => {
    return (
      <Link
        activeClass="active"
        className={
          (deviceSize === 2 ? 'text-4xl' : 'text-3xl') +
          ' z-1 block my-6 font-bold text-primary hover:text-active cursor-pointer'
        }
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-114}
        onClick={closeMenu}
        key={'menuItemMobile' + index}
      >
        {name}
      </Link>
      // <a className="font-bold z-1 text-primary hover:text-active" href={href}>
      //   {name}
      // </a>
    )
  })

  return (
    <div
      className={'relative w-full h-' + (deviceSize <= 2 ? 16 : 28) + ' z-50'}
    >
      <div className="fixed bg-white">
        {deviceSize <= 2 ? (
          // Если маленький экран (планшет/телефон)
          <div>
            <div className="flex flex-col w-screen h-16">
              <div className="z-50 flex flex-row items-center justify-between w-full h-16 px-6 bg-white">
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
                      (deviceSize >= 2 ? ' text-3xl' : 'text-2xl') +
                      ' text-text font-bold ml-4'
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
                  'absolute z-1 flex flex-col items-center justify-center overlay' +
                  (menuOpen ? ' open' : '')
                }
              >
                <div className="overflow-hidden overlay-content">
                  {MenuItemsMobile}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Если запущено с ПК
          <>
            <div className="flex flex-row items-center w-full h-16 px-8">
              {/* Телефон и чаты */}
              <div className="flex flex-row items-center flex-1">
                <a
                  className="mr-4 text-3xl font-bold text-text"
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
              <div className="flex flex-row items-center justify-end flex-1">
                <Button
                  text="Записаться"
                  href="https://api.whatsapp.com/send?phone=79138370020&text=Хочу+записаться+на+бесплатный+урок+в+Академию+Юных+Волшебников"
                  inverse
                />
                {/* <Button text="Войти в личный кабинет" href="/login" inverse /> */}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-screen h-12 px-8 bg-primary">
              {MenuItemsPC}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default HeadPanel
