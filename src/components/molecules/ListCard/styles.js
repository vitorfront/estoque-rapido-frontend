import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 98%;
  height: 58px;
  min-height: 58px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: #f0f1f6;
  border: 2px solid #deb887;

  @media (max-width: 440px) {
    max-width: 300px;
  }
`

export const CheckImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 12px;
`

export const TextContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  width: 10%;
`

export const ArrowIcon = styled.img.attrs({
  src: '/image/edit.svg',
  alt: 'pencil-icon'
})`
  width: 24px;
  height: 24px;
  object-fit: contain;
`
