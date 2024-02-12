import styled from 'styled-components'

export const Title = styled.h1`
  max-width: ${({ mw }) => mw || 320}px;
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 24}px;
  color: #deb887;
  line-height: ${({ lineHeight }) => lineHeight || 24}px;
  margin-left: ${({ ml }) => ml || 0}px;

  @media (max-width: 450px) {
    font-size: 28px;
  }

  @media (max-width: 420px) {
    max-width: 300px;
    font-size: 18px;
  }
`

export const Subtitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  color: black;
  font-weight: 500;
  margin: 0px;
  padding: 0;
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 450px) {
    max-width: 350px;
  }

  @media (max-width: 420px) {
    font-size: 14px;
    max-width: 290px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    width: 90vw;
  }
`

export const SmallText = styled.span`
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`
