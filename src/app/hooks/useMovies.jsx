import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchMovies } from '../../features/movies/movies-slice';

const useMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchMovies());
    }, [dispatch]);
}

export default useMovies