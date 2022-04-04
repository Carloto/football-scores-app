import useSWR from 'swr';
import { years } from '../helpers';
import { fetcher } from '../services';

export function useResults(year: string | undefined) {
  const yearParam = year ?? years[0];
  const { data, error } = useSWR(`/${yearParam}?_sort=numero`, fetcher);
  return {
    results: data,
    isLoading: !error && (!data || !year),
    isError: error,
  };
}
