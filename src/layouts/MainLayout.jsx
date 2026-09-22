import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OngoingEventPopup from "../components/OngoingEventPopup";
import { ongoingEvents } from "../data/events";

export default function MainLayout() {
  const location = useLocation();

  const [showOngoingPopup, setShowOngoingPopup] = useState(
    ongoingEvents.length > 0
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {showOngoingPopup && ongoingEvents.length > 0 && (
        <OngoingEventPopup
          event={ongoingEvents[0]}
          onClose={() => setShowOngoingPopup(false)}
        />
      )}
    </>
  );
}