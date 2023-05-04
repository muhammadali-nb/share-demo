import { create } from "zustand";

export type TypeAlertStatus = 'success' | 'error'

interface IAlert {
  message: string,
  status: TypeAlertStatus
  active: boolean,
  setAlert: (alert_status: TypeAlertStatus, alert_message: string) => void
}

export const Alert = create<IAlert>((set) => ({
  message: '',
  status: 'success',
  active: false,
  setAlert: () => set({})
}))