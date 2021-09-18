import { Routes } from "./routes/Routes";
import { NavigationDesktop } from "./components/navigation/navigationdesktop/NavigationDesktop";
import "./shared/global/Global.css";
import { AppProvider } from "./shared/provider/AppProvider";

function App() {
  return (
    <Routes>
      <NavigationDesktop />
    </Routes>
  );
}

export default App;
