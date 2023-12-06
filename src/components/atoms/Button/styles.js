import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #abdfae;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Avenir';
  border-radius: 24px;
  height: 42px;
  border: 0px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.white : theme.colors.primary};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.white};

  @media (max-width: 450px) {
    max-width: 355px;
  }

  @media (max-width: 420px) {
    max-width: 330px;
  }
`

export const ButtonIcon = styled.img`
  height: 24px;
  width: 24px;
  object-fit: contain;
  margin-right: 6px;
`
