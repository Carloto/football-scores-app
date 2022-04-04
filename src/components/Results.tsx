import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { getRanking } from '../helpers';
import { useResults } from '../hooks';

interface ResultsProps {
  year: string;
}

const Results = ({ year }: ResultsProps) => {
  const { results, isLoading, isError: _isError } = useResults(year);
  const [ranking, setRanking] = useState();

  useEffect(() => {
    if (!isLoading && results) {
      setRanking(getRanking(results));
    }
  }, [results, isLoading]);

  console.log(ranking);

  return <>{isLoading && <CircularProgress />}</>;
};

export { Results };
