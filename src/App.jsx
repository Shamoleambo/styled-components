import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styled/GlobalStyles.styled'
import { Header } from './components/Header'
import { Container } from './components/styled/Container.styled'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello Styled Components</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
