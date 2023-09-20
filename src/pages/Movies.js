import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { Typography ,Button} from '@mui/material';
import useStyles from '../components/styles';
import { getMovie } from '../redux/features.js/movieSlice';

const Movies = () => {
const dispatch = useDispatch();
const { movie} = useSelector((state) => ({ ...state.movie }));
const classes =useStyles();
const {id} =useParams();
const navigate = useNavigate();

useEffect(()=>{
if(id){
  dispatch(getMovie(id))
}
},[id])

  return (
<section className={classes.section}>
<img
src={movie.Poster}
alt={movie.Title}
/>
<div>
<Typography align='left' variant='h3' gutterBottom component="h2">
Title:{movie.Title}
</Typography>
<Typography align='left' variant='h3' gutterBottom component="h5">
Year: {movie.Year}
</Typography>
<Typography align='left' variant='h3' gutterBottom component="p">
Plot:{movie.Plot}
</Typography>
<Typography align='left' variant='h3' gutterBottom component="h2">
Director:{movie.Director}
</Typography>
<Button variant='contained' onClick={()=> navigate("/")}>
  GO BACK
</Button>
</div>
</section>
  )
}

export default Movies;