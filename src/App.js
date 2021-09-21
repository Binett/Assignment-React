import { Routes } from "./routes/Routes";
import { NavigationDesktop } from "./components/navigation/navigationdesktop/NavigationDesktop";
import { UserProvider } from "./shared/provider/UserContext";
import "./shared/global/Global.css";

function App() {
  return (
    <UserProvider>
      <Routes>
        <NavigationDesktop />
      </Routes>
    </UserProvider>
  );
}

export default App;
