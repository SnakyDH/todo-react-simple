import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <input
        className="m-5 p-2 rounded-lg"
        placeholder="Search your To Do"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </div>
  );
}
export { TodoSearch };
