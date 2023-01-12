import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import RoutingCon from "./Layout/Routing/RoutingCon";
import "react-toastify/dist/ReactToastify.css";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div className=" bg-bg">
      <Navbar />
      <RoutingCon />
      {/* <MessengerCustomerChat
        pageId="101461388040068"
        appId="676573577384398"
      /> */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
