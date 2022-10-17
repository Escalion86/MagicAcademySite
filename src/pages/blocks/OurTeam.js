// import logo from './logo.svg';
import React from 'react'

import adaptiveFontSize from '../../helpers/adaptiveFontSize'

import './WhatDoesItMeanToBeAWizard.css'
import belinskiy from '../../img/team/belinskiy.jpg'
import rogin from '../../img/team/rogin.jpg'

const TeacherBlock = ({
  src = null,
  alt = '',
  title = '',
  text = '',
  titleSize = 'text-2xl',
  textSize = 'text-xl',
  height = 'h-96',
}) => {
  return (
    <div
      className={'w-72 my-1 flex flex-col items-center ' + height}
      // style={{ minWidth: 250 }}
    >
      <img
        className="object-fill rounded-full"
        style={{ height: 160, wigth: 160 }}
        src={src}
        alt={alt}
      />
      <p
        className={
          titleSize + ' w-full pt-5 text-primary text-center font-bold'
        }
      >
        {title}
      </p>
      <p className={textSize + ' w-full pt-2 text-text text-center'}>{text}</p>
    </div>
  )
}

const OurTeam = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div
      id="team"
      className="flex flex-col items-center w-full bg-white"
      // style={{ height: 830 }}
    >
      <p
        className={
          fontSize.title + ' w-full p-6 text-primary text-center font-bold'
        }
      >
        Наша команда
      </p>
      <p className={fontSize.big + ' w-full py-6 px-4 text-text text-center'}>
        Профессиональные мастера сценического и прикладного искусства и конечно
        же фокусов и иллюзий.
      </p>
      <div className="flex flex-row flex-wrap justify-around w-full gap-2">
        {/* <div className="w-64"> */}
        <TeacherBlock
          src={belinskiy}
          alt="belinskiy"
          title="Алексей Белинский"
          text="Основатель академии, профессиональный иллюзионист, двукратный чемпион России по микромагии"
          titleSize={fontSize.large}
          textSize={fontSize.normal}
          height={deviceSize === 3 ? 'h-92' : 'h-80'}
        />
        <TeacherBlock
          src={rogin}
          alt="rogin"
          title="Михаил Рожин"
          text="Профессиональный иллюзионист, чемпион Сибири по карточным манипуляциям и ментализму"
          titleSize={fontSize.large}
          textSize={fontSize.normal}
          height={deviceSize === 3 ? 'h-92' : 'h-80'}
        />
        {/* </div> */}
      </div>
    </div>
  )
}

export default OurTeam
