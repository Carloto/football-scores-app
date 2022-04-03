import useSWR from 'swr';
import { fetcher } from '../services';

export function useResults(year: number) {
  const { data, error } = useSWR(`/${year}`, fetcher);
  return {
    results: data,
    isLoading: !error && !data,
    isError: error,
  };
}
