import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme.ts'
import { GlobalStyle } from './styles/global.ts'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
