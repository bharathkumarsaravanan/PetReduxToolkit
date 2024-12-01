import "./styles.css";
import { Products } from "./components/products";
import { store } from "./app/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}
