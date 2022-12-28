import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import RoutingCon from "./Layout/Routing/RoutingCon";
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
    </div>
  );
}

export default App;
