import { createContext, useState } from "react";

export const ThemeContext=createContext();


export default function DarkThemeContextProvider({children}){
  const [changeToggle, setChangeToggle]=useState(JSON.parse(localStorage.getItem("theme")) || true);
  return (
    <ThemeContext.Provider value={[changeToggle, setChangeToggle]}>
    {children}
  </ThemeContext.Provider>
  )
}