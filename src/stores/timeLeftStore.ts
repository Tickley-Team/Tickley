import { create } from 'zustand'

export interface TimeLeftState {
  timeLeft: number
  setTimeLeft: (value: number) => void
}
export const useTimeLeftStore = create<TimeLeftState>()((set) => ({
  timeLeft: 0,
  setTimeLeft: (value: number) => set({ timeLeft: value }),
}))
