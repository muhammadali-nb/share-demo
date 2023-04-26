export type TypeFrom = {
  location: {}
  address: string
}

export type TypeTaxiProcess = "start" | "order" | "check-route" | "cancel"
export type TypeTaxiStatus = "pending" | "success" | "error"
export type TypeMapStore = {
  status: TypeTaxiStatus // pending | success | error
  isLoadMap: boolean
  loadMap: (e: boolean) => void
  tariffPrice: number,
  setTariff: (tariff: string) => void
  process: TypeTaxiProcess // start | order | check-route | cancel
  setProcess: (process_state: TypeTaxiProcess) => void
  from: TypeFrom
  to: TypeFrom
  tripData: google.maps.DirectionsLeg | null
  setFrom: (coordinates: TypeFrom) => void
  setTo: (coordinates: TypeFrom) => void
  directionResponse: google.maps.DirectionsResult | null
  setDirectionResult: (direction: google.maps.DirectionsResult, trip: google.maps.DirectionsLeg) => void
  cancelTrip: () => void
  setStatus: (status: TypeTaxiStatus) => void
}