import React from "react";
import FuzzySearch from "react-fuzzy";
import "../styles/Search.scss";

const styles = {
  proposal: {
    backgroundColor: "antiquewhite",
    color: "darkblue",
  },
};

const Search = props => {
  const addLeadingZero = input => {
    return input < 10 ? `0${input}` : `${input}`;
  };
  const getMaxDate = date => {
    let weekday, differenz, day;
    if (date.getMonth() === 11) {
      weekday = new Date(date.getFullYear + 1, 11, 8);
      differenz = 6 - weekday;
      day = addLeadingZero(8 + differenz);
      return `${date.getFullYear() + 1}-12-${day}T23:59`;
    } else {
      weekday = new Date(date.getFullYear, 11, 8);
      differenz = 6 - weekday;
      day = addLeadingZero(8 + differenz);
      return `${date.getFullYear()}-12-${day}T23:59`;
    }
  };
  const { stops, setFrom } = props;

  const dateNow = new Date();
  const day = addLeadingZero(dateNow.getDate());
  const month = addLeadingZero(dateNow.getMonth() + 1);
  const year = dateNow.getFullYear();
  const hour = addLeadingZero(dateNow.getHours());
  const minute = addLeadingZero(dateNow.getMinutes());
  const nowDate = `${year}-${month}-${day}T${hour}:${minute}`;
  const maxDate = getMaxDate(dateNow);
  return (
    <form method="GET">
      <FuzzySearch
        list={stops}
        keys={["name"]}
        width={430}
        threshold={0.1}
        onSelect={() => console.log("Selected")}
        resultsTemplate={(props, state, clickHandler) =>
          state.results.map((val, i) => (
            <div
              key={i}
              style={styles.proposal}
              onClick={() => setFrom({ id: val.id, name: val.name })}
            >
              {val.name}
            </div>
          ))
        }
      />
      <input type="text" placeholder="stop" name="to" />
      <input
        type="datetime-local"
        name="time"
        defaultValue={nowDate}
        min={nowDate}
        max={maxDate}
      />
      <input type="radio" name="type" value="d" />
      <input type="radio" name="type" value="a" />
      <input type="number" defaultValue="5" min="1" max="20" name="journeys" />
    </form>
  );
};

export default Search;
