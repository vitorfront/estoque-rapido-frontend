import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 452px;
  height: 52px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
  border-style: solid;
  margin-bottom: 16px;

  @media (max-width: 420px) {
    max-width: 290px;
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    width: 350px;
    margin-bottom: 10px;
  }
`

export const InputLabel = styled.label`
  font-size: 12px;
  margin: 0px;
  padding-left: 6px;
  padding-top: 6px;
  padding-bottom: 4px;
`

export const InputText = styled.input`
  border: 0px transparent;
  margin-left: 6px;
  font-size: 16px;
  font-family: 'Avenir next';
  outline: none;
`
