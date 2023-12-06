import styled from 'styled-components'

export const ListRenderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 60vw;
  padding: 12px;
  overflow-y: scroll;

  @media (max-width: 440px) {
    width: 78vw;
  }
`
