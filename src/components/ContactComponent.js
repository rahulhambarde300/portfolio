import React,{Component} from 'react';
import { Typography, Box, Container, Grid, Avatar } from '@material-ui/core';
import styled from 'styled-components';
import {withStyles} from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = theme =>({
    grid:{
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'30%',
    },
    head:{
        textAlign: 'left',
        color: "#86c232",
        fontFamily:'JetBrainsMono'
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#a8b0b5",
        fontFamily:'JetBrainsMono'
    },
    link:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color:"#61892f",
        fontSize:"150%",
        textDecoration:"none",
        overflow:'wrap',
        '&:hover':{
            color:"#86c232"
        }
    },
    bottom:{
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'5%'
    },
    icon:{
        fontSize:"300%",
        color:"#6e6b70",
        '&:hover':{
            color:"#86c232"
        } 
        
    }
});

const Styledpara = styled.p`
    text-align : left;
    font-size:20px;
    @media (max-width: 767px) {
        font-size:15px
    }
`
const Styledhead = styled.h1`
    text-align : left;
    font-size:30px;
    @media (max-width: 767px) {
        font-size:20px;
    }
`

class Contact extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return(
            <div id="contact">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <Styledhead className={classes.head}>Let's Work Together<hr/></Styledhead>
                        <Styledpara className={classes.paper}>
                            I'm always on the lookout for fun new projects so if you've got something that 
                            you think we can work together on, send me a message and we can talk about it!
                        </Styledpara>
                        
                    </Grid>
                    
                    <a href="mailto:rahulhambarde300@gmail.com?subject=Let's Work Together" className={classes.link}>
                        <MailIcon style={{paddingRight : "1%", fontSize: "150%" , verticalAlign:"middle"}}/>
                        rahulhambarde300@gmail.com
                    </a>

                </Grid>
                <Grid container className={classes.bottom}>
                    <Grid item md={4} xs={2}>

                    </Grid>
                    <Grid item md={1} xs={3}>
                        <a href="https://github.com/rahulhambarde300" target="_blank"><GitHubIcon className={classes.icon} /></a>
                    </Grid>
                    <Grid item md={2} xs={2}>
                        <a href="https://www.linkedin.com/in/rahul-hambarde-921b28198/" target="_blank"><LinkedInIcon className={classes.icon}/></a>
                    </Grid>
                    <Grid item md={1} xs={3}>
                        <a href="https://instagram.com/rahul.h._" target="_blank"><InstagramIcon className={classes.icon}/></a>
                    </Grid>
                    <Grid item md={4} xs={2}>
                        
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(Contact);