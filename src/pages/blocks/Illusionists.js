import React from 'react'

import './Illusionists.css'

import adaptiveFontSize from '../../helpers/adaptiveFontSize'

import background2 from '../../img/background2.jpg'
import kio from '../../img/kio.jpg'
import copperfield from '../../img/copperfield.jpg'
import gudini from '../../img/gudini.png'
import akopan from '../../img/akopan.jpg'
import aik2_noeye from '../../img/pers2-noeye.png'
import eyes from '../../img/eyes.png'

const Illusionist = ({ src = null, alt = '', href = '', deviceSize = 3 }) => {
  const size = deviceSize === 3 ? 160 : deviceSize === 2 ? 130 : 90
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className="m-3 object-fill rounded-3xl shadow-extra ease-in-out duration-500 transform hover:scale-105 "
        style={{ minHeight: size, minWidth: size, height: size, wigth: size }}
        src={src}
        alt={alt}
      />
    </a>
  )
}

const Illusionists = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div
      className="w-full flex justify-center py-6"
      style={{
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // height: 420,
        backgroundImage: `url(${background2})`,
      }}
    >
      {deviceSize >= 2 ? (
        <div className="flex items-center flex-col justify-evenly h-full">
          <Illusionist
            src={kio}
            alt="kio"
            href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BE,_%D0%98%D0%B3%D0%BE%D1%80%D1%8C_%D0%AD%D0%BC%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87"
            deviceSize={deviceSize}
            size={deviceSize === 3 ? 160 : deviceSize === 2 ? 130 : 90}
          />
          <Illusionist
            src={gudini}
            alt="gudini"
            href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%93%D1%83%D0%B4%D0%B8%D0%BD%D0%B8"
            deviceSize={deviceSize}
          />
        </div>
      ) : null}
      <div className="w-140 flex flex-col items-center mx-2">
        {deviceSize === 1 ? (
          <div className="w-full flex flex-row items-center mx-2 justify-between">
            <div className="flex items-center flex-col justify-evenly">
              <Illusionist
                src={kio}
                alt="kio"
                href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BE,_%D0%98%D0%B3%D0%BE%D1%80%D1%8C_%D0%AD%D0%BC%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87"
                deviceSize={deviceSize}
              />
              <Illusionist
                src={gudini}
                alt="gudini"
                href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%93%D1%83%D0%B4%D0%B8%D0%BD%D0%B8"
                deviceSize={deviceSize}
              />
            </div>
            <div className="h-full relative w-32">
              <img
                className="object-fill pt-5"
                style={{
                  width: 160,
                  position: 'absolute',
                  top: -30,
                }}
                src={aik2_noeye}
                alt="aik2"
              />
              <img
                className="object-fill ease-in-out"
                style={{
                  width: 31,
                  position: 'absolute',
                  top: 43,
                  left: 50,
                  animation: 'eyes-smallest 2.2s',
                  animationIterationCount: 'infinite',
                }}
                src={eyes}
                alt="eyes"
              />
            </div>
            <div className="flex items-center flex-col justify-evenly h-full">
              <Illusionist
                src={copperfield}
                alt="copperfield"
                href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%BF%D0%B5%D1%80%D1%84%D0%B8%D0%BB%D1%8C%D0%B4,_%D0%94%D1%8D%D0%B2%D0%B8%D0%B4_(%D0%B8%D0%BB%D0%BB%D1%8E%D0%B7%D0%B8%D0%BE%D0%BD%D0%B8%D1%81%D1%82)"
                deviceSize={deviceSize}
              />
              <Illusionist
                src={akopan}
                alt="akopan"
                href="https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D0%BE%D0%BF%D1%8F%D0%BD,_%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD_%D0%90%D0%BC%D0%B0%D1%8F%D0%BA%D0%BE%D0%B2%D0%B8%D1%87"
                deviceSize={deviceSize}
              />
            </div>
          </div>
        ) : null}
        <p
          className={
            fontSize.title +
            ' w-full pt-6 px-4 text-primary text-center font-bold'
          }
        >
          Копперфильд, Кио, Гудини, Акопян - вам знакомы эти фамилии?
        </p>
        <p
          className={
            fontSize.big + ' w-full pt-8 px-4 text-primary text-center'
          }
        >
          Все они изучали искусство фокусов и иллюзии с раннего возраста и стали
          мировыми звездами!
        </p>
        <div className="flex-1 flex flex-col justify-end pt-6 px-4 ">
          <p className={fontSize.normal + ' w-full text-text text-center'}>
            Кликни на фото, чтобы узнать о них подробнее
          </p>
        </div>
      </div>
      {deviceSize >= 2 ? (
        <div className="flex items-center flex-col justify-evenly h-full">
          <Illusionist
            src={copperfield}
            alt="copperfield"
            href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%BF%D0%B5%D1%80%D1%84%D0%B8%D0%BB%D1%8C%D0%B4,_%D0%94%D1%8D%D0%B2%D0%B8%D0%B4_(%D0%B8%D0%BB%D0%BB%D1%8E%D0%B7%D0%B8%D0%BE%D0%BD%D0%B8%D1%81%D1%82)"
            deviceSize={deviceSize}
          />
          <Illusionist
            src={akopan}
            alt="akopan"
            href="https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D0%BE%D0%BF%D1%8F%D0%BD,_%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD_%D0%90%D0%BC%D0%B0%D1%8F%D0%BA%D0%BE%D0%B2%D0%B8%D1%87"
            deviceSize={deviceSize}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Illusionists
