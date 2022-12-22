import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loading from "./Components/Loading/Loading";
import UserCtx from "./Context/UserCtx";
import RoutingCon from "./Layout/Routing/RoutingCon";

function App() {
  const { isLoading } = UserCtx();
  return (
    <>
      {!isLoading ? (
        <div className="App bg-bg">
          <RoutingCon />
          <ToastContainer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
