// import logo from './logo.svg';
import React from "react";

import adaptiveFontSize from "../../helpers/adaptiveFontSize";

import "./WhatDoesItMeanToBeAWizard.css";
import aik2_noeye from "../../img/pers2-noeye.png";
import eyes from "../../img/eyes.png";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic4.jpg";

const InfoBlock = ({
  src = null,
  alt = "",
  title = "",
  text = "",
  titleSize = "text-2xl",
  textSize = "text-xl",
  height = "h-96",
}) => {
  return (
    <div
      className={"w-64 my-1 flex flex-col items-center " + height}
      // style={{ minWidth: 250 }}
    >
      <img
        className="object-fill border-primary border-4 rounded-3xl"
        style={{ height: 160, wigth: 160 }}
        src={src}
        alt={alt}
      />
      <p
        className={
          titleSize + " w-full pt-5 text-primary text-center font-bold"
        }
      >
        {title}
      </p>
      <p className={textSize + " w-full pt-2 text-text text-center"}>{text}</p>
    </div>
  );
};

const WhatDoesItMeanToBeAWizard = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize);
  return (
    <div
      className="w-full bg-white flex items-center flex-col"
      // style={{ height: 830 }}
    >
      <p className="text-3xl w-96 pt-6 text-primary text-center font-bold">
        Что значит быть волшебником
      </p>
      {deviceSize <= 2 ? (
        <p className="text-2xl w-120 py-6 text-text text-center">
          Раскроем таланты вашего ребенка и зажжем новую звезду
        </p>
      ) : null}
      <div className="w-full flex flex-row justify-around">
        <div className="w-64">
          <InfoBlock
            src={pic1}
            alt="pic1"
            title="Выступать на телевидении"
            text="Наши ученики уже с 6 лет выступают в прямых эфирах"
            titleSize={fontSize.large}
            textSize={fontSize.normal}
            height={deviceSize === 3 ? "h-96" : "h-80"}
          />
          <InfoBlock
            src={pic3}
            alt="pic3"
            title="Стать примером для подражания"
            text="Участвовать и побеждать в творческих турнирах"
            titleSize={fontSize.large}
            textSize={fontSize.normal}
            height={deviceSize === 3 ? "h-96" : "h-80"}
          />
        </div>
        {deviceSize >= 2 ? (
          <div
            className={
              (deviceSize === 3 ? "w-88" : "w-64") + " items-center z-10"
            }
          >
            {deviceSize === 3 ? (
              <p className="text-2xl w-full pt-6 text-text text-center">
                Раскроем таланты вашего ребенка и зажжем новую звезду
              </p>
            ) : null}

            <div className="relative mt-10">
              <img
                className="object-fill pt-5"
                style={{
                  width: deviceSize === 3 ? 336 : 256,
                  position: "absolute",
                  top: 0,
                }}
                src={aik2_noeye}
                alt="aik2"
              />
              <img
                className="object-fill ease-in-out"
                style={{
                  width: deviceSize === 3 ? 87 : 67,
                  position: "absolute",
                  top: deviceSize === 3 ? 159 : 126,
                  left: deviceSize === 3 ? 127 : 97,
                  animation:
                    (deviceSize === 3 ? "eyes" : "eyes-small") + " 2.2s",
                  animationIterationCount: "infinite",
                }}
                src={eyes}
                alt="eyes"
              />
            </div>
          </div>
        ) : null}
        {deviceSize === 3 ? (
          <div className="w-64">
            <InfoBlock
              src={pic2}
              alt="pic2"
              title="Быть в центре внимания"
              text="Легко держаться на сцене и уверенно выступать перед публикой"
              titleSize={fontSize.large}
              textSize={fontSize.normal}
              height={deviceSize === 3 ? "h-96" : "h-80"}
            />
            <InfoBlock
              src={pic4}
              alt="pic4"
              title="Удивлять и завораживать"
              text="Стать юным мастером иллюзионного искусства"
              titleSize={fontSize.large}
              textSize={fontSize.normal}
              height={deviceSize === 3 ? "h-96" : "h-80"}
            />
          </div>
        ) : null}
      </div>
      {deviceSize <= 2 ? (
        <div
          className={
            (deviceSize === 2 ? "flex-row" : "flex-col items-center") +
            " w-full flex justify-around mb-6"
          }
        >
          <InfoBlock
            src={pic2}
            alt="pic2"
            title="Быть в центре внимания"
            text="Легко держаться на сцене и уверенно выступать перед публикой"
            titleSize={fontSize.large}
            textSize={fontSize.normal}
            height={deviceSize === 2 ? "h-80" : "h-72"}
          />
          <InfoBlock
            src={pic4}
            alt="pic4"
            title="Удивлять и завораживать"
            text="Стать юным мастером иллюзионного искусства"
            titleSize={fontSize.large}
            textSize={fontSize.normal}
            height={deviceSize === 2 ? "h-80" : "h-72"}
          />
        </div>
      ) : null}
    </div>
  );
};

export default WhatDoesItMeanToBeAWizard;
