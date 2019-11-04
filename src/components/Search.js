import React from "react";

const Search = () => {
  const addLeadingZero = input => {
    return input < 10 ? `0${input}` : `${input}`;
  };
  const dateNow = new Date();
  const day = addLeadingZero(dateNow.getDate());
  const month = addLeadingZero(dateNow.getMonth() + 1);
  const year = dateNow.getFullYear();
  const hour = addLeadingZero(dateNow.getHours());
  const minute = addLeadingZero(dateNow.getMinutes());
  const nowDate = `${year}-${month}-${day}T${hour}:${minute}`;
  return (
    <form method="GET">
      <input type="text" placeholder="start" name="from" />
      <input type="text" placeholder="stop" name="to" />
      <input
        type="datetime-local"
        name="time"
        defaultValue={nowDate}
        min={nowDate}
      />
      <input type="radio" name="type" value="d" />
      <input type="radio" name="type" value="a" />
      <input type="number" defaultValue="5" min="1" max="20" name="journeys" />
    </form>
  );
};

export default Search;
