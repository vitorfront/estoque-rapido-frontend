import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomeScreen, ListScreen } from 'screens'

describe('HomeScreen', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <HomeScreen />
      </BrowserRouter>
    )

    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })

  it('should render correctly2', () => {
    render(
      <BrowserRouter>
        <ListScreen />
      </BrowserRouter>
    )

    expect(screen.getByText('Adicionar')).toBeInTheDocument()
  })
})
