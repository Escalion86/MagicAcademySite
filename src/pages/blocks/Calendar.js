import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import geo from '../../img/geo.png'
import whatsappIcon from '../../img/whatsapp.png'
import viberIcon from '../../img/viber.png'
import phoneIcon from '../../img/phone.png'
// import telegramIcon from '../../img/telegram.png'
import vkIcon from '../../img/vk.png'

const Calendar = ({ deviceSize, screenWidth }) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div
      id="calendar"
      className="flex flex-col items-center justify-center p-4"
    >
      <p
        className={
          fontSize.title + ' w-full p-6 text-primary text-center font-bold'
        }
      >
        Адреса и расписание
      </p>
      <div>
        <div className={fontSize.large + ' flex gap-2 items-center'}>
          <img
            className="object-fill"
            style={{ height: 24, wigth: 24 }}
            src={geo}
            alt="geo"
          />
          <span>Красноярск, Бограда 95</span>
        </div>
        <div className="flex flex-col ml-8">
          <span>Начинающие с 12:00 до 14:00</span>
          <span>Продвинутые с 14:00 до 16:00</span>
        </div>
      </div>
    </div>
  )
}

export default Calendar
