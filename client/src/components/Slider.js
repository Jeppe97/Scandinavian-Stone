import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./styles/Login.scss";
import "./styles/Dimension.scss";


const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

function valuetext(value) {
  return value;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([8, 12]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>

      </Typography>
      <Slider
        min={100}
        max={5000}
        step={10}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}