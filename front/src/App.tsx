import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import {FC, ReactElement} from "react";

const App: FC = (): ReactElement => {

  return (
    <>
      <BrowserRouter>
          <div className="w-screen min-h-screen flex flex-col relative">
                <AppRoutes/>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
