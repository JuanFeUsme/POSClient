import type { Station } from "../../domain/station";
import type { StationRepository } from "../../domain/StationRepository";

export type CreateStationCommand = {    
    stationName: String;    
}

//At first we inject what we need, "The Dependency"
export function CreateStation(Repo: StationRepository) {
    //And we return a function that uses the Dependency
    //This avoid injecting the Dependency each time we use it --see the CreateStation.tsx to watch the implementation
    return async (CreateStationCommand: CreateStationCommand) =>{
        const station: Station = {
            id: Math.floor(Math.random() * 100),
            stationName: CreateStationCommand.stationName,
            openingCash: 0,
            closureCash: 0,
            status: "open"
        }    
        await Repo.create(station);
    }
}