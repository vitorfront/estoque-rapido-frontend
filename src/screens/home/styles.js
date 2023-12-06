import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: #abdfae;
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 720px;
  background-color: white;
  border-radius: 24px;

  @media (max-width: 420px) {
    max-width: 320px;
    max-height: 600px;
    padding: 12px;
  }
`

export const BagImage = styled.img.attrs({
  src: 'image/supermarket-list.png',
  alt: 'shopping-back'
})`
  width: 220px;
  height: 220px;

  @media (max-width: 420px) {
    width: 180px;
    height: auto;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 452px;
  margin-top: 24px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-top: 8px;
  }
`
