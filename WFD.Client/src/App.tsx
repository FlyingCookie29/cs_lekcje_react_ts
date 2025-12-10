import { Link, Route, Routes } from "react-router";
import { Skldaniki } from "./Pages/Skldaniki";
import { Jedzenie } from "./Pages/Jedzenie";
import { Contact } from "./Pages/Contact";

function App() {
  const buttonText = "ahsgdkahsgdujkashdg";

  const buttonClick = () => {
    console.log("mam dosc na dzis");
  };

  return (
    <>
      <p>
        <Link to="/Contact">Kontakt</Link>
      </p>
      <p>
        <Link to="/Jedzenie">Jedzenie</Link>
      </p>
      <p>
        <Link to="/Skldaniki">Składniki</Link>
      </p>
      <p>
        <Link to="/">HOME</Link>
      </p>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Jedzenie" element={<Jedzenie />} />
        <Route path="/Skldaniki" element={<Skldaniki />} />
      </Routes>
      <button onClick={buttonClick}>{buttonText}</button>
      Nauka ts i racta z Czarósiem
    </>
  );
}

export default App;
