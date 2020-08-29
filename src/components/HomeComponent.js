import React, {Component} from 'react';
import { Typography, Box, Container, Grid, Avatar, Button } from '@material-ui/core';
import {withStyles, styled} from '@material-ui/core/styles'
import img from '../Images/rahul.png';
import Profile from './ProfileComponent';
import Work from './WorkComponent';
import Contact from './ContactComponent';
import resume from '../resume/resume.pdf';


const useStyles = theme =>({
    root:{
        flexGrow:1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#61892f",
        fontFamily:'JetBrainsMono',
        paddingTop:'15%',
    },
    grid:{
        paddingTop:'15%',
        paddingBottom:'30%',
        paddingLeft:'7%',
        paddingRight:'7%'
    },
    link:{
        textAlign: 'left',
        color: "#fff",
        fontFamily:'JetBrainsMono',
        fontSize: '20px',
        textDecoration:"none",
        '&:hover':{
            color: "#09adb3"
        }
    },
    button:{
        marginTop:"5px",
        backgroundColor:"#61892f",
        color:"#fff",
        borderRadius:"10px",
        '&:hover':{
            backgroundColor:"inherit",
            color:"#86c232"
        }
    }


})



class Home extends Component{
    constructor(props){
        super(props);
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Container >
                    <Grid container spacing={3} className={classes.grid} >
                        <Grid item md={6} xs={12} >
                            <h2 className={classes.paper} > Hi, I am <br/> 
                                <span style={{ fontSize:"200%", color : "#fff"}}>Rahul Hambarde</span><br/> 
                                <span style={{ color : "#6b6e70"}}>A Game And Web Developer</span><br/>
                                <Button variant="contained" color="primary" href={resume} 
                                    target="none" className={classes.button}>
                                    Resume
                                </Button>
                                
                            </h2>
                            
                            
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
