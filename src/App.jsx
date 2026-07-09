import React, { Suspense } from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import AvailablePlayer from "./component/AvailablePlayer/AvailablePlayer.jsx";



const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  return response.json();
}


function App() {

  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar />

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <AvailablePlayer playersPromise={playersPromise}> </AvailablePlayer>
      </Suspense>


    </>
  );
}

export default App;
