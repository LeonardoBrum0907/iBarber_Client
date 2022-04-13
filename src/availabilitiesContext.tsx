import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/axios';

export interface AvailabilitiesData {
  id: string;
  month_day: string;
  hour: string;
}

interface AvailabilitiesProviderProps {
  children: ReactNode;
}

interface AvailabilitiesContextData {
  availability: AvailabilitiesData[];
}

export const availabilitiesContext = createContext<AvailabilitiesData[]>([])

export function AvailabilitiesProvider({children}: AvailabilitiesProviderProps) {
  // const { isLoading, data, error } = useQuery('availability', async () => {
  //   const response = await fetch('http://localhost:3000/api/availability')
  //   const data = await response.json()

  //   return data;
  // })

  const [availabilities, setAvailabilities] = useState<AvailabilitiesData[]>([])

  useEffect(() => {
    api.get('/availability')
      .then(response => setAvailabilities(response.data.availabilities))
  }, [])

  return (
    <availabilitiesContext.Provider value={availabilities}>
      {children}
    </availabilitiesContext.Provider>
  )
}