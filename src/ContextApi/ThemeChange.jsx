import { createContext, useEffect, useState } from 'react'

const Theme = createContext();
const ThemeChange = ({ children }) => {

  const [themeVal, setTheme] = useState("light");

  useEffect(() => {
    if (themeVal == "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeVal])


  return (
    <>
      <Theme.Provider value={{ themeVal, setTheme }}>
        {children}
      </Theme.Provider>
    </>
  )
}

export default ThemeChange;
export { Theme };