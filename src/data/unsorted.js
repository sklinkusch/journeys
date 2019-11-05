// import stops from vbb-stations
const stopObject = require("vbb-stations/full.json");
// correct typos
stopObject["90000470117"].name = "Cottbus, Beuchstr.";
stopObject["90000210600"].name = "Wustermark, Brunnenplatz";
// form an array containing objects with id and name properties
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
// export new array
export default stopsUnsorted;
