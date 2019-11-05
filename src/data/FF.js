import { remainingStops as stopsUnsorted } from "./EE";

const stops = stopsUnsorted.filter(stop =>
  stop.name.startsWith("Frankfurt (Oder)")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);

export { stops, remainingStops };
