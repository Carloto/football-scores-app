import { CircularProgress, TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { getRanking } from '../helpers';
import { useResults } from '../hooks';

interface ResultsProps {
  year: string;
}

const Results = ({ year }: ResultsProps) => {
  const { results, isLoading, isError: _isError } = useResults(year);
  const [ranking, setRanking] = useState<any[]>([]);

  useEffect(() => {
    if (!isLoading && results) {
      setRanking(getRanking(results));
    }
  }, [results, isLoading]);

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && ranking && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align='center'>P</TableCell>
                <TableCell align='center'>V</TableCell>
                <TableCell align='center'>E</TableCell>
                <TableCell align='center'>D</TableCell>
                <TableCell align='center'>GP</TableCell>
                <TableCell align='center'>GC</TableCell>
                <TableCell align='center'>S</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ranking.map((team: any) => (
                <TableRow
                  key={team.teamName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {team.teamName}
                  </TableCell>
                  <TableCell align='center'>{team.data.points}</TableCell>
                  <TableCell align='center'>{team.data.wins}</TableCell>
                  <TableCell align='center'>{team.data.ties}</TableCell>
                  <TableCell align='center'>{team.data.losses}</TableCell>
                  <TableCell align='center'>{team.data.goalsScored}</TableCell>
                  <TableCell align='center'>
                    {team.data.goalsReceived}
                  </TableCell>
                  <TableCell align='center'>{team.data.goalsBalance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export { Results };
