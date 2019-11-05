// import stops from vbb-stations
const stopObject = require("vbb-stations/full.json");
// correct typos
stopObject["900000470117"].name = "Cottbus, Beuchstr.";
stopObject["900000210600"].name = "Wustermark, Brunnenplatz";
// form an array containing objects with id and name properties
const stopsUnsorted = Object.keys(stopObject).map(key => {
  return { id: stopObject[key].id, name: stopObject[key].name };
});
// export new array
// console.log(`original array: ${stopsUnsorted.length}`);
export default stopsUnsorted;
