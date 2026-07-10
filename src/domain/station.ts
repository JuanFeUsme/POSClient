export type Station = {
    id: Number;
    stationName: String;
    openingCash: Number;
    closureCash: Number;
    status: "closed" | "open";
}