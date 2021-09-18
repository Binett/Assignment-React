import { Routes } from "./routes/Routes";
import { NavigationDesktop } from "./components/navigation/navigationdesktop/NavigationDesktop";
import { ApiProvider } from "./shared/provider/ApiContext";
import { UserProvider } from "./shared/provider/UserContext";
import "./shared/global/Global.css";

function App() {
  return (
    <UserProvider>
      <ApiProvider>
        <Routes>
          <NavigationDesktop />
        </Routes>
      </ApiProvider>
    </UserProvider>
  );
}

export default App;
