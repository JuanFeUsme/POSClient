import type { Station } from "../../domain/station";
import type { StationRepository } from "../../domain/StationRepository";

export type DeleteStationCommand = {
  id: Number;  
};

export const DeleteStation = async (port: StationRepository) => {
  return async (DeleteStationCommand: DeleteStationCommand) => {            
    await port.delete(DeleteStationCommand.id);
  };
};
