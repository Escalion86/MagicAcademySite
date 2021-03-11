import React from "react";

import adaptiveFontSize from "../../helpers/adaptiveFontSize";

import background2 from "../../img/background2.jpg";
import kio from "../../img/kio.jpg";
import copperfield from "../../img/copperfield.jpg";
import gudini from "../../img/gudini.png";
import akopan from "../../img/akopan.jpg";

const Illusionist = ({ src = null, alt = "", href = "", size = 160 }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className="mx-2 object-fill rounded-3xl shadow-extra ease-in-out duration-500 transform hover:scale-105 "
        style={{ minHeight: size, minWidth: size, height: size, wigth: size }}
        src={src}
        alt={alt}
      />
    </a>
  );
};

const Illusionists = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize);
  return (
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
          size={deviceSize === 3 ? 160 : deviceSize === 2 ? 140 : 120}
        />
        <Illusionist
          src={gudini}
          alt="gudini"
          href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%93%D1%83%D0%B4%D0%B8%D0%BD%D0%B8"
          size={deviceSize === 3 ? 160 : deviceSize === 2 ? 140 : 120}
        />
      </div>
      <div className="w-140 flex flex-col items-center mx-2">
        <p
          className={
            fontSize.big + " w-full pt-6 text-primary text-center font-bold"
          }
        >
          Копперфильд, Кио, Гудини, Акопян - вам знакомы эти фамилии?
        </p>
        <p className={fontSize.big + " w-full pt-10 text-primary text-center"}>
          Все они изучали искусство фокусов и иллюзии с раннего возраста и стали
          мировыми звездами!
        </p>
        <div className="flex-1 flex flex-col justify-end">
          <p className={fontSize.normal + " w-full text-text text-center"}>
            Кликни на фото, чтобы узнать о них подробнее
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col justify-evenly h-full">
        <Illusionist
          src={copperfield}
          alt="copperfield"
          href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%BF%D0%B5%D1%80%D1%84%D0%B8%D0%BB%D1%8C%D0%B4,_%D0%94%D1%8D%D0%B2%D0%B8%D0%B4_(%D0%B8%D0%BB%D0%BB%D1%8E%D0%B7%D0%B8%D0%BE%D0%BD%D0%B8%D1%81%D1%82)"
          size={deviceSize === 3 ? 160 : deviceSize === 2 ? 140 : 120}
        />
        <Illusionist
          src={akopan}
          alt="akopan"
          href="https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D0%BE%D0%BF%D1%8F%D0%BD,_%D0%90%D1%80%D1%83%D1%82%D1%8E%D0%BD_%D0%90%D0%BC%D0%B0%D1%8F%D0%BA%D0%BE%D0%B2%D0%B8%D1%87"
          size={deviceSize === 3 ? 160 : deviceSize === 2 ? 140 : 120}
        />
      </div>
    </div>
  );
};

export default Illusionists;
