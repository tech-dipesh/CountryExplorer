import React, { useContext } from 'react'
import { ThemeContext } from '../src/contexts/ThemeContextProvider'
export const useDarklightMode=()=> useContext(ThemeContext);