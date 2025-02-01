import { createContext } from "react"

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'