import React, { Suspense } from "react";
import { useState } from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import AvailablePlayer from "./component/AvailablePlayer/AvailablePlayer.jsx";
import SelectedPlayer from "./component/SelectedPlayer/SelectedPlayer.jsx";



const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  return response.json();
}


function App() {
  const [toggle, setToggle] = useState(true);
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar />

      <div className="primary-font max-w-300 mx-auto m-10 flex justify-between">
        <h1 className="text-2xl font-bold text-[#131313]">Available Players</h1>
         
        <div className="flex font-bold">
          <button onClick={() => setToggle(true)} className={`text-[#131313] border border-gray-300 py-3 px-4  rounded-l-2xl border-r-0 ${ toggle === true?"bg-[#E7FE29]":"" }`}>Available</button>
          <button onClick={() => setToggle(false)} className={`"text-gray-500 border border-gray-300 py-3 px-4 rounded-r-2xl border-l-0 ${toggle === false?"bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
        </div>
  
      </div>

      {
        toggle === true?<Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
         <AvailablePlayer playersPromise={playersPromise}> </AvailablePlayer>
         </Suspense>:<SelectedPlayer></SelectedPlayer>
      }

      

      


    </>
  );
}

export default App;
