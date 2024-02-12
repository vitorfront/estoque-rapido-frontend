import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Title, Subtitle } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  ButtonContainer,
  BagImagef
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  console.log({ username })

  const onClickcontinue = () => {
    if (username.length < 3) {
      alert('Username deve conter mais do que 3 caracteres!')
      return
    }

    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />
        <Title>Seu estoque mais rápido do que nunca</Title>
        <Subtitle mb={100}>
          Ajudamos voçê a organizar seu estoque de forma descomplicada.
        </Subtitle>
        <Subtitle mw={452} align="left" mb={10}>
          Digite abaixo seu usuário para ter acesso a seu estoque rápido:
        </Subtitle>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex: usuario1"
        />
        <ButtonContainer>
          <Button onClick={onClickcontinue}>Entrar</Button>
        </ButtonContainer>
      </ContentContainer>
      <BagImagef />
    </ScreenContainer>
  )
}
