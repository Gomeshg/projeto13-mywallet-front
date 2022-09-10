import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./services/session";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
