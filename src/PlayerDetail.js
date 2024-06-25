const PlayerDetail = ({ player, hide, setHide }) => {
  return (
    <div>
      {hide && (
        <div className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-[50%] h-[50%] md:inset-0  bg-white">
          <div className="flex flex-col h-full">
            <span>Player details</span>
            <span className="w-[33%] font-bold pl-2">{player.name}</span>
            <span className="w-[33%] font-bold pl-2">{player.type}</span>
            <button className="w-[33%] font-bold pl-2" onClick={setHide}>
              <span className="bg-green-500 px-4 py-2 rounded-md text-white mt-10 absolute">Close</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerDetail;
