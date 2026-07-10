import { useMemo } from "react";
import { LocalStorageStationRepository } from "../../infrastructure/LocalStorageStationRepository";
import { GetAllStations, GetStation } from "../../application/use-cases/GetStation";
import { CreateStation } from "../../application/use-cases/CreateStation";
import { UpdateStation } from "../../application/use-cases/UpdateStation";
import { DeleteStation } from "../../application/use-cases/DeleteStation";

///
export function useStationHook() {
  const repo = useMemo(() => {
    return new LocalStorageStationRepository();
  }, []);

  const createStation = useMemo(() => {
    return CreateStation(repo);
  }, [repo]);

  const getAllStations = useMemo(() => {
    return GetAllStations(repo);
  }, [repo]);

  const getStation = useMemo(() => {
    return GetStation(repo);
  }, [repo]);

  const updateStation = useMemo(() => {
    return UpdateStation(repo);
  }, [repo]);

  const deleteStation = useMemo(() => {
    return DeleteStation(repo);
  }, [repo]);
  

  return {
    createStation,
    getAllStations,
    getStation,
    updateStation,
    deleteStation
  };
}
