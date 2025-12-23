import './App.css'
import Header from './Comps/Header/header.jsx'
import { Outlet } from 'react-router-dom'
import DarkThemeContextProvider from './contexts/ThemeContextProvider'

const App = () => {
  return (
    <DarkThemeContextProvider>
      <Header/>
      <Outlet/>
    </DarkThemeContextProvider>

  )
}

export default App