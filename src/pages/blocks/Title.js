import React from "react";

import "./Title.css";

import Button from "../../components/Button";

import adaptiveFontSize from "../../helpers/adaptiveFontSize";
import background from "../../img/background.jpg";
import hat from "../../img/hat.png";
import rabbit from "../../img/rabbit.png";
import logoWhite from "../../img/logoWhite.png";
import merlin from "../../img/merlin.png";
import aik from "../../img/pers1.png";

const Title = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize);
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full relative z-10"
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: deviceSize === 3 ? 620 : 550,
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: deviceSize === 3 ? 200 : 580,
            left: deviceSize === 3 ? 50 : deviceSize === 2 ? "20%" : "10%",
          }}
        >
          <a href="https://magicacademykrsk.ru/#merlin">
            <img
              className="object-fill mx-1"
              style={{
                height: deviceSize === 3 ? 350 : deviceSize === 2 ? 250 : 200,
              }}
              src={merlin}
              alt="merlin"
            />
          </a>
        </div>
        <div className="w-full" align="center">
          <img
            className="object-fill mx-1 pt-5"
            style={{ height: 160 }}
            src={logoWhite}
            alt="magicacademy"
          />
          <h1
            className={
              fontSize.extra + " text-white max-w-xl m-6 text-center font-bold"
            }
            style={{ textShadow: "-5px -3px 2px rgba(76, 29, 149, 1)" }}
          >
            Школа фокусов и сценического искусства
          </h1>
          <h2
            className={
              fontSize.large + " max-w-140 m-6 text-primary text-center"
            }
          >
            Уникальный кружок в <b>Красноярске</b>
          </h2>
          <p
            className={
              fontSize.big + "  w-100 mt-6 text-primary text-center font-bold"
            }
          >
            НАБОР ДЕТЕЙ
          </p>
          <p
            className={
              fontSize.big + " w-100 m-0 text-primary text-center font-bold"
            }
          >
            возрастом от 5 до 14 лет
          </p>
          <Button
            text="Записаться на БЕСПЛАТНЫЙ урок"
            bigText={deviceSize === 3}
            addClass="mt-6"
            inverse
          />
          <img
            className="object-fill mx-1 pt-5"
            style={
              deviceSize === 3
                ? {
                    height: 480,
                    position: "absolute",
                    top: 220,
                    left: "70%",
                  }
                : deviceSize === 2
                ? {
                    height: 360,
                    position: "absolute",
                    top: 480,
                    left: "55%",
                  }
                : {
                    height: 270,
                    position: "absolute",
                    top: 500,
                    left: "53%",
                  }
            }
            src={aik}
            alt="aik"
          />
        </div>
      </div>
      <div
        className={
          (deviceSize === 3 ? "h-52" : "h-120") +
          " bg-white flex flex-col justify-end items-center relative"
        }
        align="center"
      >
        <div
          style={{
            height: 200,
            width: 150,
            position: deviceSize === 3 ? "absolute" : "relative",
            left: deviceSize === 3 ? 100 : 0,
            top: 0,
          }}
        >
          <a href="https://magicacademykrsk.ru/#rabbit">
            <img
              className="object-fill z-0"
              style={{
                height: 72,
                position: "absolute",
                top: 75,
                left: 29,
                animation: "rabitt-up-down 4s",
                animationDelay: "5s",
              }}
              src={rabbit}
              alt="rabbit"
            />
          </a>
          <img
            className="object-fill z-1"
            style={{ height: 110, position: "absolute", top: 70, left: 6 }}
            src={hat}
            alt="hat"
          />
        </div>
        <div className="h-52">
          <p
            className={
              fontSize.big + " w-96 pt-6 text-primary text-center font-bold"
            }
          >
            Искусство иллюзии в шаговой доступности
          </p>
          <Button
            text="Посмотреть филиалы и расписание"
            bigText={deviceSize === 3}
            addClass="mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
