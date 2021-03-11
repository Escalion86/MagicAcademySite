import React from "react";

import Button from "../../components/Button";
import adaptiveFontSize from "../../helpers/adaptiveFontSize";

const FirstLessonFree = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize);
  return (
    <div
      className="w-full bg-white flex flex-col items-center justify-center"
      style={{ height: 400 }}
    >
      <p className={fontSize.big + " w-full text-text text-center font-bold"}>
        Первое занятие БЕСПЛАТНО!
      </p>
      <p
        className={fontSize.large + " pt-5 px-4 text-text text-center max-w-xl"}
      >
        Мы даем Вам возможность попробовать первое занятие, после которого вы
        сможете принять решение о дальнейшем посещении
      </p>
      <Button
        text="ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ УРОК"
        big={deviceSize >= 2}
        bigText={deviceSize === 3}
        addClass="mt-8"
      />
    </div>
  );
};

export default FirstLessonFree;
