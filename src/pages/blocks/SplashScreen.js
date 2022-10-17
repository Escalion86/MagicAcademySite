import React from 'react'
import { Link } from 'react-scroll'

import './SplashScreen.css'

import adaptiveFontSize from '../../helpers/adaptiveFontSize'

import Button from '../../components/Button'

const SplashScreen = ({
  title = '',
  text = '',
  deviceSize = 3,
  buttonText = '',
  onPressButton = null,
  hrefButton = null,
}) => {
  const fontSize = adaptiveFontSize(deviceSize)
  return (
    <div className="flex flex-col items-center justify-center splash">
      <div className="flex flex-col splash-content overflow-hidden items-center justify-center">
        <div className="bg-white w-6/12 py-6 px-4 items-center justify-center">
          <div className={'text-text ' + fontSize.big}>{title}</div>
          <div className={'m-2 text-text ' + fontSize.normal}>{text}</div>
          {onPressButton ? (
            <Button
              text={buttonText}
              href={hrefButton}
              // big={deviceSize >= 2}
              // bigText={deviceSize === 3}
              addClass="mt-4"
              pulse
              onPress={onPressButton}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
