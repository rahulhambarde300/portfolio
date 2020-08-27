import React, {Component} from 'react';
import { Typography, Box, Container, Grid, Avatar } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import img from '../Images/rahul.png';
import Profile from './ProfileComponent';
import Work from './WorkComponent';
import Contact from './ContactComponent';


const useStyles = theme =>({
    root:{
        flexGrow:1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#fff",
        fontFamily:'JetBrainsMono',
        paddingTop:'15%',
        
    },
    grid:{
        paddingTop:'15%',
        paddingBottom:'30%',
        paddingLeft:'7%',
        paddingRight:'7%'
    }


})

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Container >
                    <Grid container spacing={3} className={classes.grid}>
                        <Grid item md={6} xs={12} >
                            <Typography className={classes.paper} variant = "h5" > Hi, I am <br/> 
                                <span style={{ fontSize:"300%"}}>Rahul Hambarde</span><br/> 
                                A Game And Web Developer
                            </Typography>
                            
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={img} style={{height: '97%', width : '70%', borderRadius : '50%', padding: "20px"}}/>
                        </Grid>
                    </Grid>
                    <Profile />
                    <Work/>
                    <Contact/>

                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);
