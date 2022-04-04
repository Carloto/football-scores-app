import useSWR from 'swr';
import { fetcher } from '../services';

export function useResults(year: string) {
  const { data, error } = useSWR(`/${year}?_sort=numero`, fetcher);

  return {
    results: data,
    isLoading: !error && !data,
    isError: error,
  };
}
