import { HomeScreen, ListScreen } from 'screens'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { theme, GlobalStyle } from 'styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/list" element={<ListScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
