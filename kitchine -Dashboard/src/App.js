import Sidebar from "./Components/SideBar/Sidebar";
import UserProvider from "./Context/UserCtx/UserProvider";
import RoutingCon from "./Layout/Routing/RoutingCon";

function App() {
  return (
    <div className="App bg-bg">
      <UserProvider>
        <RoutingCon />
      </UserProvider>
    </div>
  );
}

export default App;
