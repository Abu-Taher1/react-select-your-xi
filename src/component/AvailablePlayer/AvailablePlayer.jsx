import React from "react";
import { use } from "react";
import userImg from "../../assets/user-1.svg";
import flagImg from "../../assets/report-1.svg";

const AvailablePlayer = ({ playersPromise }) => {
  const playerData = use(playersPromise);

  return (
    <div className="primary-font mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {playerData.map((player) => (
          <div key={player.player_name} className="card h-full w-full overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
            <figure>
              <img
                src={player.player_img}
                alt={player.player_name}
                className="aspect-4/3 w-full rounded-xl object-cover"
              />
            </figure>
            <div className="mt-4 min-w-0">
              <div className="flex items-center gap-4">
                <img src={userImg} alt="User" className="h-10 w-10 flex-none" />
                <h2 className="card-title min-w-0 wrap-break-word text-lg font-semibold">
                  {player.player_name}
                </h2>
              </div>

              <div className="my-4 flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span>
                    <img src={flagImg} alt="Flag" className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-gray-400">{player.player_country}</span>
                </div>
                <button className="cursor-pointer rounded-lg border border-gray-300 bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 transition-colors duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300">
                  {player.player_role}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-[#131313]">Rating</span>
                  <span>{player.player_rating}</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-[#131313]">Role</span>
                  <span className="text-right">{player.player_role}</span>
                </div>
              </div>

              <div className="my-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-bold text-[#131313]">Price : ${player.player_price}</p>
                <button className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-100 sm:w-auto">
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayer;
