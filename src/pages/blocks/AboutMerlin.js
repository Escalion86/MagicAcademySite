import React from 'react'

import Button from '../../components/Button'
import merlin from '../../img/merlin.png'

import adaptiveFontSize from '../../helpers/adaptiveFontSize'

const AboutMerlin = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div
      className="flex items-center justify-center w-full px-5 bg-primary sm:px-10 lg:px-20"
      style={{ height: 400 }}
    >
      <div class="items-center w-50 py-3 px-2 rounded-3xl bg-white">
        <img
          className="object-fill mx-1"
          style={{
            height: deviceSize === 3 ? 250 : deviceSize === 2 ? 200 : 150,
          }}
          src={merlin}
          alt="merlin"
        />
      </div>
      <div className="flex-1 ml-4 text-center">
        <p className={fontSize.big + ' w-full text-white text-center'}>
          Мы являемся <strong>единственной</strong> школой в России обладающей{' '}
          <strong>кубком Мерлина</strong> - высшей Международной наградой в мире
          искусства фокусов и иллюзий
        </p>
        <Button
          text="Подробнее про награду"
          bigText={deviceSize === 3}
          addClass="mt-8"
          inverse
          href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BB%D0%B8%D0%BD_(%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%8F)"
        />
      </div>
    </div>
  )
}

export default AboutMerlin
