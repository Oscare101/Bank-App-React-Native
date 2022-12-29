import React, { useState } from 'react'

import LogInScreen from './logInScreen'
import RegistrationScreen from './registrationScree'
import MainUserScreen from './mainUserScreen'

export default function MainScreen(props) {
  const [status, setStatus] = useState('login')

  const content =
    status == 'login' ? (
      <LogInScreen onChange={(whereTo) => setStatus(whereTo)} />
    ) : status == 'registration' ? (
      <RegistrationScreen onChange={(whereTo) => setStatus(whereTo)} />
    ) : (
      <MainUserScreen onChange={(whereTo) => setStatus(whereTo)} />
    )

  return content
}
