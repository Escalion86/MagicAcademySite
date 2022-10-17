import adaptiveFontSize from '../../helpers/adaptiveFontSize'
import geo from '../../img/geo.png'
import whatsappIcon from '../../img/whatsapp.png'
import viberIcon from '../../img/viber.png'
import phoneIcon from '../../img/phone.png'
// import telegramIcon from '../../img/telegram.png'
import vkIcon from '../../img/vk.png'

const Contacts = ({ deviceSize, screenWidth }) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div
      id="contacts"
      className="flex flex-col items-center justify-center p-4"
    >
      <p
        className={
          fontSize.title + ' w-full p-6 text-primary text-center font-bold'
        }
      >
        Контакты
      </p>
      <div className="flex flex-row items-center flex-1 px-1 gap-x-4">
        <a href="tel:+79138370020" target="_blank" rel="noreferrer">
          <img
            className={
              (deviceSize <= 2 ? 'w-16' : 'w-20') +
              ' object-fill mx-1 duration-500 ease-in-out transform hover:scale-110'
            }
            src={phoneIcon}
            alt="phone"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=79138370020"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={
              (deviceSize <= 2 ? 'w-16' : 'w-20') +
              ' object-fill mx-1 duration-500 ease-in-out transform hover:scale-110'
            }
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
            className={
              (deviceSize <= 2 ? 'w-16' : 'w-20') +
              ' object-fill mx-1 duration-500 ease-in-out transform hover:scale-110'
            }
            src={viberIcon}
            alt="viber"
          />
        </a>
        {/* <a
          href="viber://chat?number=79138370020"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={
              (deviceSize <= 2 ? 'w-16' : 'w-20') +
              ' object-fill mx-1 duration-500 ease-in-out transform hover:scale-110'
            }src={telegramIcon}
            alt="telegram"
          />
        </a> */}
        <a
          href="http://vk.com/MagicAcademyKrsk"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={
              (deviceSize <= 2 ? 'w-16' : 'w-20') +
              ' object-fill mx-1 duration-500 ease-in-out transform hover:scale-110'
            }
            src={vkIcon}
            alt="vk"
          />
        </a>
      </div>
    </div>
  )
}

export default Contacts
