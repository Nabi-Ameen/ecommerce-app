import "bootstrap/dist/css/bootstrap.min.css";
import RoutsConfig from "./Routes/RoutsConfig";
import Store from "./Store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={Store}>
        <RoutsConfig />
      </Provider>
    </>
  )
}

export default App;
