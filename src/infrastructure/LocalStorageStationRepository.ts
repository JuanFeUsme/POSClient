import type { Station } from "../domain/station";
import type { StationRepository } from "../domain/StationRepository";

export class LocalStorageStationRepository implements StationRepository {
    async getOne(): Promise<Station> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<Station[]> {
        return JSON.parse(localStorage.getItem("Stations") ?? "[]") || [];
    }
    
    async create(station: Station): Promise<void> {
        try{
            localStorage.setItem("Stations", JSON.stringify(station))
        }
        catch (error){
            if(error instanceof Error){
                throw new Error(error.message);            
            }
        }
    }

    update(station: Station): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    delete(stationId: Number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}