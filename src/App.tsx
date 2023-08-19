import React, { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { getDesignTokens } from './styles'
import { useTheme } from './providers/theme'
import ThemeSwitcher from './components/themeSwitcher'
import { useLogin } from './providers/login'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { currentTheme } = useTheme()
  const { verifyUserAuthentication } = useLogin()
  const darkTheme = React.useMemo(
    () => createTheme(getDesignTokens(currentTheme)),
    [currentTheme],
  )

  useEffect(() => {
    verifyUserAuthentication()
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes />
        <Toaster position="top-center" reverseOrder={false} />
        <ThemeSwitcher />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
