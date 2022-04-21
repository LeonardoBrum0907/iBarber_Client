import { ReactNode } from 'react';
import { useQuery } from 'react-query';
import { api } from './services/axios';

export interface AvailabilitiesData {
  id: string;
  month_day: string;
  hour: string[];
}

interface AvailabilitiesProviderProps {
  children: ReactNode;
}
export async function getAvailability(): Promise<AvailabilitiesData[]> {
  const { data } = await api.get('availability');

  const availabilities = data.availabilities;

  return availabilities;
}

export function useAvailability() {
  return useQuery('availability', getAvailability)
}