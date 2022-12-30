import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
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
