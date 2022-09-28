// Core imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Component imports
import Home from "./components/Home";
import Menu from "./components/Menu";
import NoOrders from "./components/NoOrders";
import Payment from "./components/Payment";
import PaymentChoice from "./components/PaymentChoice";
import PaymentConfirmations from "./components/PaymentConfirmations";
import PaymentTip from "./components/PaymentTip";
import YourTable from "./components/YourTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/table" element={<YourTable />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-choice" element={<PaymentChoice />} />
        <Route path="/payment/tip" element={<PaymentTip />} />
        <Route
          path="/payment/confirmation"
          element={<PaymentConfirmations />}
        />
        <Route path="/no-order" element={<NoOrders />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
