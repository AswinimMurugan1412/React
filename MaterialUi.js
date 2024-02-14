import React from "react";
import {createMuiTheme} from '@material-ui/core';
import { ThemeProvider} from '@mui/material/styles';
import { Button, Typography} from '@mui/material';
import purple from '@mui/material/colors/purple';
import green from '@mui/material/colors/green'
const theme=createMuiTheme({
    palette:{
        primary:{
            main:purple[500],
        },
        secondary:{
            main:green[500],
        },
    },
    typography:{
        h3:{
            fontSize:'3rem',
            fontWeight:300,
            fontFamily:'Roboto,sans-serif',
        },
    }
});
function MaterialUi(){
    return(
        <div className="App-header">
            <center>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3">Theming Example</Typography>
                    <Button varient ="contained" color="primary" style={{margin: "10px"}}>
                        Click here!
                        </Button>
                        <Button varient ="contained" color="secondary" style={{margin: "10px"}}>
                        Click here!
                        </Button>
                </ThemeProvider>
            </center>
        </div>
    )
}
export default MaterialUi;