import React from "react";
import PlayerList from "./PlayerList";
import useDropdown from "./useDropdown";

// this is a message 

function DropDownB() {
  const [player, PlayerDropDown] = useDropdown("Players", "", PlayerList);
  return <PlayerDropDown class="PlayB-Area" />;
}
export default DropDownB;
