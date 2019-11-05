import { remainingStops as stopsUnsorted } from "./PR";

const stops = stopsUnsorted.filter(
  stop =>
    stop.name === "Atterwasch" ||
    stop.name === "Auras" ||
    stop.name === "Babow" ||
    stop.name.startsWith("Bagenz,") ||
    stop.name === "Bärenbrück" ||
    stop.name.startsWith("Bärenklau (SPN)") ||
    stop.name.startsWith("Bloischdorf,") ||
    stop.name === "Bohrau" ||
    stop.name.startsWith("Bohsdorf,") ||
    stop.name === "Brahmow" ||
    stop.name === "Bresinchen" ||
    stop.name.startsWith("Briesen (SPN)") ||
    stop.name.startsWith("Briesnig,") ||
    stop.name === "Brodtkowitz" ||
    stop.name === "Bühlow" ||
    stop.name.startsWith("Bühlow,") ||
    stop.name.startsWith("Burg,") ||
    stop.name === "Casel" ||
    stop.name.startsWith("Dahlitz,") ||
    stop.name.startsWith("Deulowitz,") ||
    stop.name.startsWith("Dissen,") ||
    stop.name.startsWith("Döbern,") ||
    stop.name === "Domsdorf (bei Drebkau)" ||
    stop.name.startsWith("Drachhausen,") ||
    stop.name.startsWith("Drebkau,") ||
    stop.name.startsWith("Drehnow,") ||
    stop.name.startsWith("Drewitz,") ||
    stop.name.startsWith("Drieschnitz,") ||
    stop.name.startsWith("Dubrau,") ||
    stop.name.startsWith("Eichow,") ||
    stop.name.startsWith("Eichwege,") ||
    stop.name.startsWith("Fehrow,") ||
    stop.name.startsWith("Forst,") ||
    stop.name === "Forst(Gr)" ||
    stop.name === "Frauendorf, Nord" ||
    stop.name === "Frauendorf, Waldstr." ||
    stop.name.startsWith("Friedrichshain,") ||
    stop.name.startsWith("Gablenz,") ||
    stop.name === "Gahry" ||
    stop.name.startsWith("Gahry,") ||
    stop.name.startsWith("Glinzig,") ||
    stop.name.startsWith("Golschow,") ||
    stop.name.startsWith("Gosda (bei Döbern)") ||
    stop.name.startsWith("Gosda (bei Klinge)") ||
    stop.name.startsWith("Grabko,") ||
    stop.name.startsWith("Grano,") ||
    stop.name.startsWith("Graustein,") ||
    stop.name.startsWith("Greifenhain,") ||
    stop.name.startsWith("Grießen,") ||
    stop.name === "Groß Bademeusel" ||
    stop.name.startsWith("Groß Breesen,") ||
    stop.name.startsWith("Groß Döbbern,") ||
    stop.name.startsWith("Groß Drewitz,") ||
    stop.name === "Groß Gastrose" ||
    stop.name.startsWith("Groß Gastrose,") ||
    stop.name.startsWith("Groß Jamno,") ||
    stop.name.startsWith("Groß Kölzig,") ||
    stop.name.startsWith("Groß Luja,") ||
    stop.name.startsWith("Groß Oßnig,") ||
    stop.name.startsWith("Groß Schacksdorf,") ||
    stop.name.startsWith("Groß See,") ||
    stop.name.startsWith("Guben,") ||
    stop.name === "Guhrow" ||
    stop.name.startsWith("Guhrow,") ||
    stop.name.startsWith("Gulben,") ||
    stop.name.startsWith("Heinersbrück,") ||
    stop.name.startsWith("Horlitza,") ||
    stop.name.startsWith("Hornow,") ||
    stop.name.startsWith("Jämlitz,") ||
    stop.name.startsWith("Jänschwalde,") ||
    stop.name.startsWith("Kraftwerk Jänschwalde,") ||
    stop.name.startsWith("Tagebau Jänschwalde,") ||
    stop.name.startsWith("Jehserig,") ||
    stop.name.startsWith("Jerischke,") ||
    stop.name.startsWith("Jethe,") ||
    stop.name.startsWith("Jocksdorf,") ||
    stop.name === "Kackrow" ||
    stop.name.startsWith("Kahsel,") ||
    stop.name === "Karlsfeld" ||
    stop.name.startsWith("Karlsfeld,") ||
    stop.name.startsWith("Kathlow,") ||
    stop.name.startsWith("Kerkwitz,") ||
    stop.name === "Klein Bademeusel" ||
    stop.name.startsWith("Klein Döbbern,") ||
    stop.name === "Klein Düben" ||
    stop.name.startsWith("Klein Gastrose,") ||
    stop.name === "Klein Jamno" ||
    stop.name.startsWith("Klein Jamno,") ||
    stop.name.startsWith("Klein Kölzig,") ||
    stop.name === "Klein Limberg" ||
    stop.name.startsWith("Klein Loitz,") ||
    stop.name === "Klein Oßnig" ||
    stop.name.startsWith("Klein See,") ||
    stop.name === "Klinge" ||
    stop.name.startsWith("Klinge,") ||
    stop.name.startsWith("Komptendorf,") ||
    stop.name.startsWith("Koppatz,") ||
    stop.name.startsWith("Koschendorf,") ||
    stop.name.startsWith("Krayne,") ||
    stop.name.startsWith("Krieschow,") ||
    stop.name.startsWith("Kunersdorf (SPN)") ||
    stop.name.startsWith("Laubsdorf,") ||
    stop.name === "Laubst" ||
    stop.name.startsWith("Lauschütz,") ||
    stop.name.startsWith("Leuthen,") ||
    stop.name.startsWith("Lieskau,") ||
    stop.name.startsWith("Limberg,") ||
    stop.name.startsWith("Löschen,") ||
    stop.name.startsWith("Lübbinchen,") ||
    stop.name === "Mattendorf" ||
    stop.name.startsWith("Maust,") ||
    stop.name.startsWith("Milkersdorf,") ||
    stop.name === "Muckrow" ||
    stop.name === "Mulknitz" ||
    stop.name.startsWith("Müschen,") ||
    stop.name.startsWith("Naundorf (bei Forst)") ||
    stop.name.startsWith("Neuendorf (bei Cottbus)") ||
    stop.name.startsWith("Neuhausen (SPN)") ||
    stop.name === "Oelsnig" ||
    stop.name.startsWith("Papitz,") ||
    stop.name === "Papproth" ||
    stop.name.startsWith("Peitz,") ||
    stop.name.startsWith("Pinnow (SPN)") ||
    stop.name.startsWith("Preilack,") ||
    stop.name.startsWith("Preschen,") ||
    stop.name.startsWith("Proschim,") ||
    stop.name === "Raden" ||
    stop.name.startsWith("Radensdorf,") ||
    stop.name.startsWith("Radensdorf (SPN)") ||
    stop.name.startsWith("Rehnsdorf,") ||
    stop.name === "Reuthen" ||
    stop.name.startsWith("Roggosen,") ||
    stop.name === "Ruben" ||
    stop.name.startsWith("Saccasne,") ||
    stop.name.startsWith("Schenkendöbern,") ||
    stop.name.startsWith("Schieben,") ||
    stop.name.startsWith("Schlagsdorf (SPN)") ||
    stop.name.startsWith("Schmogrow,") ||
    stop.name.startsWith("Schönheide,") ||
    stop.name.startsWith("Schorbus,") ||
    stop.name.startsWith("Schwarze Pumpe,") ||
    stop.name.startsWith("Sellessen,") ||
    stop.name.startsWith("Sembten,") ||
    stop.name.startsWith("Sergen,") ||
    stop.name === "Siewisch" ||
    stop.name.startsWith("Simmersdorf,") ||
    stop.name.startsWith("Spremberg,") ||
    stop.name.startsWith("Staakow (bei Beeskow)") ||
    stop.name === "Steinitz" ||
    stop.name.startsWith("Steinitz,") ||
    stop.name.startsWith("Striesow,") ||
    stop.name.startsWith("Tauer,") ||
    stop.name.startsWith("Teichland,") ||
    stop.name.startsWith("Terpe,") ||
    stop.name.startsWith("Trebendorf,") ||
    stop.name.startsWith("Tschernitz,") ||
    stop.name === "Türkendorf" ||
    stop.name.startsWith("Turnow,") ||
    stop.name.startsWith("Wadelsdorf,") ||
    stop.name.startsWith("Welzow,") ||
    stop.name.startsWith("Werben (SPN)") ||
    stop.name.startsWith("Weskow,") ||
    stop.name === "Wiesendorf" ||
    stop.name === "Wilschwitz" ||
    stop.name.startsWith("Wolfshain,") ||
    stop.name === "Zahsow" ||
    stop.name === "Zelz" ||
    stop.name === "Zelz-Bahren" ||
    stop.name.startsWith("Zschorno,")
);
const remainingStops = stopsUnsorted.filter(stop => stops.indexOf(stop) === -1);

export { stops, remainingStops };
