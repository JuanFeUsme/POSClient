import React, { useState } from "react";
import { useStationHook } from "./useStationsHook";

export function CreateStationForm() {
  const [appError, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    stationName: "",
  });

  // Initialize the useCase one time with the Dependency injected
  const {
    createStation,
    getAllStations,
    getStation,
    updateStation,
    deleteStation,
  } = useStationHook();

  
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await createStation({ stationName: formData.stationName });
      setFormData({ stationName: "" });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Set error in UI state
        console.error(appError);
      } else {
        setError("An unexpected error ocurred while creating the station");
      }
    }
  };

  // Función para manejar el cambio en los inputs
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    await setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          name="stationName"
          id="StationName"
          value={formData.stationName}
          onChange={handleChange}
          placeholder="Station name"
        />
        <button type="submit">Create Station</button>
      </form>
    </div>
  );
}
