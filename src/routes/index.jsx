import { BrowserRouter } from "react-router-dom";
import { WebRoutes } from "./web.routes";

export function Routes(){
  return(
    <BrowserRouter>
      <WebRoutes/>
    </BrowserRouter>
  )
}