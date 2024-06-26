import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    margin: "20px 0px 10px 0px",
    padding: 20,
    backgroundColor: "#F2F2F2",
    textAlign: "center", 
    color: "#1D1C1C",
  },
  text: {
    fontSize: 16,
  },
  link:{ 
    color: "#0A466E", 
    padding: 3, 
    marginRight: 3,
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        Created by{" "}
        
          Mohit Singh
       
        <span style={{fontSize:14}}>&#128153;</span>
      </Typography>
    </Box>
  );
}

export default Footer;
