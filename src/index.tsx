import { render } from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "./theme/themeProvider";

render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
, document.getElementById('root'))