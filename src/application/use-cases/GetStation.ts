import type { StationRepository } from "../../domain/StationRepository"

export const GetAllStations = async (port: StationRepository) => {
    return await port.getAll();
}

export const GetStation = async (port: StationRepository) => {
    return await port.getOne();
}