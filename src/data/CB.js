import { remainingStops as stopsUnsorted } from "./BRB";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Cottbus,") ||
    stop.name.startsWith("Haasow,") ||
    stop.name.startsWith("Hänchen,") ||
    stop.name.startsWith("Klein Gaglow,") ||
    stop.name.startsWith("Kolkwitz,")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);

export { stops, remainingStops };
