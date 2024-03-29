import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.DarkTransparent};
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 23.5vw;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 24px;

  @media (max-width: 830px) {
    width: 60vw;
  }

  @media (max-width: 450px) {
    width: 100vw;
  }

  @media (max-width: 420px) {
    width: 100vw;
  }
`

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`

export const ModalCloseButton = styled.button`
  border: 0px;
  height: 24px;
  width: 24px;
  background-image: url('image/close.svg');
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 12vh;
  justify-content: space-between;
  margin-top: 62vh;
  width: 100%;

  @media (max-width: 420px) {
    height: 18vh;
    margin-top: 49vh;
  }
`
