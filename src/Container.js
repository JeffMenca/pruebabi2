import React, { useState } from "react";
import PlayerDetail from "./PlayerDetail";

const Container = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [showModal, setShowModal] = useState(false);

  let playersArray = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      type: "Forward",
      selected: false,
    },
    {
      id: 2,
      name: "Lionel Messi",
      type: "Forward",
      selected: false,
    },
  ];

  const HandleSelect = (playerId) => {
    let player = playersArray.find((player) => player.id === playerId);
    player.selected = true;
    setSelectedPlayers([...selectedPlayers, player]);
  };

  const HandleUnSelect = (playerId) => {
    let player = playersArray.find((player) => player.id === playerId);
    player.selected = false;
    setSelectedPlayers(
      selectedPlayers.filter((player) => player.id !== playerId)
    );
  };

  const HandleSelectPlayer = (playerId) => {
    let player = playersArray.find((player) => player.id === playerId);
    setSelectedPlayer(player);
    setShowModal(true);
  };



  return (
    <div className="w-screen h-screen flex flex-row p-10 space-x-6">
      <div className="w-[50%] bg-white pt-10 rounded-md">
        <div className="w-ful flex flex-col justify-start">
          <span className="w-full bg-white-500 mb-10 text-black font-bold text-2xl">
            Avalaible players
          </span>
          <ul className="flex flex-col items-center justify-center">
            {" "}
            <li className="bg-white border-solid py-4 rounded-md w-[95%]">
              <div className="flex text-gray-400">
                <span className="w-[33%] font-bold pl-2">Name</span>
                <span className="w-[33%] font-bold pl-2">Role</span>
                <span className="w-[33%] font-bold pl-2">Action</span>
              </div>
            </li>
            {playersArray.map((player) => {
              return (
                <li className="bg-white border-solid border-2 border-gray-200 py-4 rounded-md w-[95%] my-6">
                  <div className="flex">
                    <span className="w-[33%] font-bold pl-2" onClick={() => HandleSelectPlayer(player.id)}>
                      {player.name}
                    </span>
                    <span className="w-[33%] font-bold pl-2">
                      {player.type}
                    </span>
                    <button
                      className="w-[33%] font-bold pl-2"
                      onClick={() => HandleSelect(player.id)}
                    >
                      <span className="bg-green-500 px-4 py-2 rounded-md text-white">
                        Select
                      </span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-[50%] bg-white pt-10 rounded-md">
        <div className="w-ful flex flex-col justify-start">
          <span className="w-full bg-white-500 mb-10 text-black font-bold text-2xl">
            Selected players
          </span>
          <ul className="flex flex-col items-center justify-center">
            {" "}
            <li className="bg-white border-solid py-4 rounded-md w-[95%]">
              <div className="flex text-gray-400">
                <span className="w-[33%] font-bold pl-2">Name</span>
                <span className="w-[33%] font-bold pl-2">Role</span>
                <span className="w-[33%] font-bold pl-2">Action</span>
              </div>
            </li>
            {selectedPlayers.map((player) => {
              return (
                <li className="bg-white border-solid border-2 border-gray-200 py-4 rounded-md w-[95%] my-6">
                  <div className="flex">
                    <span className="w-[33%] font-bold pl-2">
                      {player.name}
                    </span>
                    <span className="w-[33%] font-bold pl-2">
                      {player.type}
                    </span>
                    <button
                      className="w-[33%] font-bold pl-2"
                      onClick={() => HandleUnSelect(player.id)}
                    >
                      <span className="bg-red-500 px-4 py-2 rounded-md text-white">
                        Remove
                      </span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <PlayerDetail player={selectedPlayer} hide={showModal} setHide={() => setShowModal(false)} />

    </div>
  );
};

export default Container;
