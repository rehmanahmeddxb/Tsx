// pages/index.tsx
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Bookings from "../components/Bookings";
import Deliveries from "../components/Deliveries";
import DirectSale from "../components/DirectSale";
import ReceivePayment from "../components/ReceivePayment";
import GRN from "../components/GRN";
import Clients from "../components/Clients";
import Materials from "../components/Materials";
import Ledger from "../components/Ledger";
import Bills from "../components/Bills";

export default function HomePage() {
  const [page, setPage] = useState("Dashboard");

  const renderPage = () => {
    switch (page) {
      case "Dashboard": return <Dashboard />;
      case "Bookings": return <Bookings />;
      case "Deliveries": return <Deliveries />;
      case "DirectSale": return <DirectSale />;
      case "ReceivePayment": return <ReceivePayment />;
      case "GRN": return <GRN />;
      case "Clients": return <Clients />;
      case "Materials": return <Materials />;
      case "Ledger": return <Ledger />;
      case "Bills": return <Bills />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{
        width: "250px",
        backgroundColor: "#1d222e",
        color: "white",
        padding: "20px"
      }}>
        <h2>CRM MANAGER</h2>
        {["Dashboard","Bookings","Deliveries","DirectSale","ReceivePayment","GRN","Clients","Materials","Ledger","Bills"]
          .map(item => (
            <div
              key={item}
              style={{ margin: "10px 0", cursor: "pointer" }}
              onClick={() => setPage(item)}
            >
              {item}
            </div>
          ))
        }
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {renderPage()}
      </div>
    </div>
  );
}
