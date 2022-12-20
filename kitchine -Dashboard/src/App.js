import UserCtx from "./Context/UserCtx";
import RoutingCon from "./Layout/Routing/RoutingCon";

function App() {
  const { isLoading } = UserCtx();
  return (
    <>
      {isLoading ? (
        <div className="App bg-bg">
          <RoutingCon />
        </div>
      ) : (
        <div class="flex justify-center items-center t-10">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden">.</span>
        </div>
      </div>
      )}
    </>
  );
}

export default App;
