import React from "react";
import { useParams } from "react-router-dom";

const players = [
  { id: 1, name: "Cristiano Ronaldo", position: "Forward", team: "Portugal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnpCr3xMG3KwrXYYNY8Qwe0VYIn9KlmyHjE5wMcK35SquMbRsDbSOTIM&usqp=CAE&s" },
  { id: 2, name: "Lionel Messi", position: "Forward", team: "Argentina", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVfD7jt0ws7S7psRIMChaewxLpFeOeqTWIlP1rgup4sBJTAcYVAgzSN4&usqp=CAE&s" },
  { id: 3, name: "LeBron James", position: "Forward", team: "Lakers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TJn1VUs1vgRqW6tsQp4lEleJnRxOxTq9Ng&s" },
];

function PlayerDetails() {
  const { id } = useParams();
  const player = players.find((p) => p.id === parseInt(id));

  if (!player) {
    return <h2 className="text-center text-2xl text-red-500">Player not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <img src={player.image} alt={player.name} className="h-40 w-40 rounded-full mb-4" />
      <h1 className="text-4xl font-bold">{player.name}</h1>
      <p className="text-gray-400 text-lg">{player.position}</p>
      <p className="text-gray-400 text-lg">{player.team}</p>
    </div>
  );
}

export default PlayerDetails;

