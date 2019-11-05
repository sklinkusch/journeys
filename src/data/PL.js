import { remainingStops as stopsUnsorted } from "./SN";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name.startsWith("Czerwiensk,") ||
    stop.name.startsWith("Kostrzyn (PL)") ||
    stop.name === "Krajnik Dolny" ||
    stop.name.startsWith("Krajnik Dolny,") ||
    stop.name.startsWith("Krzewina Zgorzelecka,") ||
    stop.name.startsWith("Kunowice (PL),") ||
    stop.name.startsWith("Przylep,") ||
    stop.name.startsWith("Rzepin (PL),") ||
    stop.name.startsWith("Slubice,") ||
    stop.name.startsWith("Slubice (PL),") ||
    stop.name.startsWith("Szczecin,") ||
    stop.name.startsWith("Zielona Gora (PL),")
);

const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);
// console.log(`after PL: ${remainingStops.length}`);
// console.log(remainingStops);
export { stops, remainingStops };
