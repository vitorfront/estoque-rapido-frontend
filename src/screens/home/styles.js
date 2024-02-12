import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: #4f4f4f;
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const BagImagef = styled.img.attrs({
  src: 'image/imgfundo.png',
  alt: 'estoque-f'
})`
  width: 75vw;
  height: 100%;

  @media (max-width: 500px) {
    max-width: 0px;
  }

  @media (max-width: 1030px) {
    max-width: 0px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 558px;
  height: 100vh;
  background-color: white;
  border-radius: 24px;

  @media (max-width: 320px) {
    width: 100vw;
  }

  @media (max-width: 450px) {
    width: 90vw;
  }

  @media (max-width: 750px) {
    width: 100vw;
    padding: 12px;
  }

  @media (max-width: 1030px) {
    width: 100vw;
  }
`

export const BagImage = styled.img.attrs({
  src: 'image/logocerta2.png',
  alt: 'estoque-back'
})`
  width: 300px;
  height: 300px;
  padding-right: 1px;
  margin-bottom: 60px;

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
  margin-top: 100px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-top: 8px;
  }

  @media (max-width: 320px) {
    width: 90vw;
  }
`
