import adaptiveFontSize from '../../helpers/adaptiveFontSize'

const Footer = ({ deviceSize }) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div
      className={
        fontSize.small +
        ' flex flex-col items-center justify-center w-full p-4 text-gray-500'
      }
    >
      <span className="text-center">
        ИП Белинский Алексей Алексеевич ОГРНИП 319246800103511 ИНН 245727560982
      </span>
      <span className="text-center">
        Юр. адрес: 660043, г. Красноярск, ул. Линейная, д.109, оф. 293
      </span>
      {/* <span className="text-center">
        Тел.: 89138370020 E-Mail: MagicAcademyKrsk@gmail.com
      </span> */}
      <span className="text-center">
        © 2017-2022 Академия Юных Волшебников, г. Красноярск
      </span>
    </div>
  )
}

export default Footer
