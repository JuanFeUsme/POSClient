import type { Station } from "./station";

export interface StationRepository {
    getAll(): Promise<Station[]>
    getOne(): Promise<Station>
    create(station: Station) : Promise<void>
    update(station: Station) : Promise<void>
    delete(stationId: Number) : Promise<void>
}