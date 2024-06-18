import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import Diary from "./Diary";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Diary />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
