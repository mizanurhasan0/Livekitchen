import Sidebar from "./Components/SideBar/Sidebar";
import RoutingCon from "./Layout/Routing/RoutingCon";

function App() {
  return (
    <div className="App bg-bg">
      <Sidebar>
        <RoutingCon />
      </Sidebar>
    </div>
  );
}

export default App;
