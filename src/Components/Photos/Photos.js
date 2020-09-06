  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const Photos = (props) => {
    const classes = useStyles();
    const {url} = props.photo;
    return (
        <div className={classes.root}>
        <CardMedia
          className={classes.media}
          image={url}
        ></CardMedia>
        </div>
    );
};
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 100,
    width: 100,
    borderRadius:'50%',
    marginBottom:'30px',
    marginLeft:'9vh',
    marginTop:'6.2vh',
    border:'2px solid white',
  },
});


export default Photos;