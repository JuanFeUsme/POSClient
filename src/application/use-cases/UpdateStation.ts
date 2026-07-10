import type { Station } from "../../domain/station";
import type { StationRepository } from "../../domain/StationRepository";

export type UpdateStationCommand = {
  id: Number;
  stationName: String;
  openingCash: Number;
  closureCash: Number;
  status: "closed" | "open";
};

export const UpdateStation = async (port: StationRepository) => {
  return async (UpdateStationCommand: UpdateStationCommand) => {
    const station : Station = {
        id: UpdateStationCommand.id,
        stationName: UpdateStationCommand.stationName,
        openingCash: UpdateStationCommand.openingCash,
        closureCash: UpdateStationCommand.closureCash,
        status: UpdateStationCommand.status
    }
    await port.update(station);
  };
};
