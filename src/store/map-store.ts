import { create } from "zustand";
import { TypeFrom, TypeMapStore } from "@/store/types";


export const useMapStore = create<TypeMapStore>((set) => ({
  isLoadMap: false,
  status: 'pending',
  process: 'start',
  tariffPrice: 2.000, // default price from start class
  from: {} as TypeFrom,
  to: {} as TypeFrom,
  tripData: null,
  directionResponse: null,
  loadMap: (load) => set((state) => ({
    isLoadMap: load ? state.isLoadMap = true : state.isLoadMap = false
  })),
  setFrom: (toFrom) => set((state) => ({
    from: state.from = toFrom
  })),
  setTo: (toTo) => set((state) => ({
    to: state.to = toTo
  })),
  setDirectionResult: (result, trip) => set(state => ({
    directionResponse: state.directionResponse = result,
    tripData: state.tripData = trip
  })),
  cancelTrip: () => set(state => ({
    directionResponse: state.directionResponse = null,
    from: state.from = { location: {}, address: '' },
    to: state.to = { location: {}, address: '' },
    process: state.process = 'cancel',
    status: state.status = 'pending'

  })),
  setProcess: (process_state) => set(state => ({
    process: state.process = process_state
  })),
  setStatus: (status_map) => set(state => ({
    status: state.status = status_map
  })),
  setTariff: (tariff) => {
    // if ()
  }
}))