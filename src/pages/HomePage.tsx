import { createContext, useState } from 'react';
import { AppState } from '../AppState';
import CarForm from '../features/cars/CarForm';
import CarsList from '../features/cars/CarsList';
export const ThemeContext = createContext('light')

export default function HomePage() {

  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    if (theme == 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }


  return (
    // <ThemeContext.Provider value={theme}>
      <div className="home-page">
        <button onClick={toggleTheme}>toggle theme</button>
        <CarForm />
        <CarsList />

      </div>
    // </ThemeContext.Provider>
  )
}