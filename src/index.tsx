import { render } from "react-dom";
import { App } from "./app/App";
import { ThemeProvider } from "./shared/lib/theme";

render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
, document.getElementById('root'))