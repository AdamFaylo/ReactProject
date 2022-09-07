import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchMovies } from '../../features/movies/movies-slice';

const useMovies = (category) => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchMovies(category));
    }, [dispatch]);
}

export default useMovies