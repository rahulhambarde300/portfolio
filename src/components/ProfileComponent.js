import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import '../App.css';
import { Typography, Grid, Paper, Tabs, Tab, AppBar } from '@material-ui/core';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import classNames from 'classnames';
import c from '../Images/c.png';
import cs from '../Images/cs.svg';
import java from '../Images/java.png';
import python from '../Images/python.png';
import js from '../Images/js.png';
import php from '../Images/php.svg';
import sql from '../Images/sql.png';
import docker from '../Images/docker.png';
import logo from '../logo.svg';
import node from '../Images/node.png';
import express from '../Images/express.png';
import unity from '../Images/unity.png';
import ps from '../Images/ps.webp';
import blender from '../Images/blender.png';
import maya from '../Images/maya.png';
import github from '../Images/github.png';
import mongo from '../Images/mongo.webp';
import angular from '../Images/angular.svg';
import spring from '../Images/spring.png';
import aws from '../Images/aws.png';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#86c232'
      },
    }
  });

  
const useStyles = theme =>({
    head:{
        textAlign: 'left',
        color: "#86c232",
        fontFamily:'JetBrainsMono',
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#a8b0b5",
        fontFamily:'JetBrainsMono',

    },
    listHead:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#fff",
        fontFamily:'JetBrainsMono',
    },
    grid:{
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'7%',
    },
    list:{
        listStyleType:'none',
        fontSize: "125%",
        paddingBottom:"200px",
        '& li':{
            paddingBottom:"10px",
        }
    },
    tabs:{
        backgroundColor : "theme.palette.paper",
        textAlign : "left",
        color:"#fff",
        
    },
    appBar:{
        boxShadow : "none"
    },

}
    
)
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

const Styledimg = styled.img`
    width:30px; 
    height:30px;
    vertical-align:middle;
    margin-right:20px;
    @media (max-width: 767px) {
        margin-right:50px;
    }
`
const Styledli = styled.li`
    font-size:20px;
    @media (max-width: 767px) {
        font-size:15px;
    }
`


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"1"
        }
    }

    handleChange =(event, newValue) =>{
        this.setState({
            value : newValue
        })
    }

    render(){
        const {classes} = this.props;
        const closs = classNames(classes.list,classes.paper);
        return(
            <MuiThemeProvider theme={theme}>
            <div id="profile" className='trans'>
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <Styledhead className={classes.head}>About Me<hr/></Styledhead>
                        <Styledpara className={classes.paper}>
                            <ul>
                                <li>
                                    An MACS student at Dalhousie university, Halifax.
                                </li>
                                <li>
                                    Full-stack developer with experience in testing and DevOps as well. Proficient in Java, Springboot and various JS frameworks like Node, React, Next and Express.
                                </li>
                                <li>
                                I aim to provide industry level applications and solutions and constantly learn new skills and improve myself.
                                </li>                               
                            </ul>
                        </Styledpara>
                    </Grid>

                    <Grid item xs={12}>
                        <Styledpara className={classes.head}>Here are the languages and tools I use:</Styledpara>
                    </Grid>

                    <Grid item xs={4} >
                        <h3 className={classes.listHead}>LANGUAGES</h3>
                        <ul className={closs}>
                            
                            <Styledli><Styledimg src={c} className = {classes.img} alt="C"/>C</Styledli>
                            <Styledli><Styledimg src={java} className = {classes.img} alt="Java"/>Java</Styledli>
                            <Styledli><Styledimg src={cs} className = {classes.img} alt="C#"/>C#</Styledli>
                            <Styledli><Styledimg src={python} className = {classes.img} alt="Python"/>Python</Styledli>
                            <Styledli><Styledimg src={js} className = {classes.img} alt="JS"/>Javascript</Styledli>
                            <Styledli><Styledimg src={php} className = {classes.img} alt="PHP"/>PHP</Styledli>
                            <Styledli><Styledimg src={sql} className = {classes.img} alt="SQL"/>SQL</Styledli>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                        <h3 className={classes.listHead}>FRAMEWORKS</h3>
                        <ul className={closs}>
                            <Styledli><Styledimg src={logo} className = {classes.img} alt="ReactJS"/>ReactJS</Styledli>
                            <Styledli><Styledimg src={node} className = {classes.img} alt="NodeJS"/>NodeJS</Styledli>
                            <Styledli><Styledimg src={express} className = {classes.img} alt="ExpressJS"/>ExpressJS</Styledli>
                            <Styledli><Styledimg src={angular} className = {classes.img} alt="AngularJS"/>AngularJS</Styledli>
                            <Styledli><Styledimg src={spring} className = {classes.img} alt="SpringBoot"/>SpringBoot</Styledli>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                        <h3 className={classes.listHead}>TOOLS</h3>
                        <ul className={closs}>
                            <Styledli><Styledimg src={unity} className = {classes.img} alt="Unity3D"/>Unity3D</Styledli>
                            <Styledli><Styledimg src={ps} className = {classes.img} alt="Photoshop"/>Photoshop</Styledli>
                            <Styledli><Styledimg src={blender} className = {classes.img} alt="Blender"/>Blender</Styledli>
                            <Styledli><Styledimg src={docker} style={{height:"150%"}} className = {classes.img} alt="Docker"/>Docker</Styledli>
                            <Styledli><Styledimg src={github} className = {classes.img} alt="Github"/>Github</Styledli>
                            <Styledli><Styledimg src={mongo} className = {classes.img} alt="Mongo"/>MongoDB</Styledli>
                            <Styledli><Styledimg src={aws} className = {classes.img} alt="Mongo"/>AWS</Styledli>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                    <Grid item xs={12} >
                        <Styledhead className={classes.head}>Education<hr/></Styledhead>
                        <div className={classes.tabs}>
                            <TabContext value={this.state.value}>
                                <AppBar position="static" color='transparent' className={classes.appBar}> 
                                    <TabList onChange={this.handleChange} aria-label="Education"  
                                    indicatorColor="primary"
                                    textColor="inherit">
                                        <Tab label="Masters" value="1" className={classes.listHead}/>
                                        <Tab label="Bachelors" value="2" className={classes.listHead}/>
                                    </TabList>
                                </AppBar>
                                <TabPanel value="2" className={classes.paper}>
                                    <h3>Shri Guru Gobind Singhji IE & T, Nanded</h3>
                                    <h4>Jun 2017 - Jun 2021</h4>
                                    <h4>Bachelors in Computer Science & Engg.</h4>
                                    <h4>GPA: 3.5/4</h4>
                                </TabPanel>
                                <TabPanel value="1" className={classes.paper}>
                                    <h3>Dalhousie university, Halifax, NS</h3>
                                    <h4>Sep 2023 - May 2025</h4>
                                    <h4>Masters in Applied Computer Science</h4>
                                    <h4>GPA: 4.2/4.3</h4>
                                </TabPanel>
                            </TabContext>
                        </div>
                        
                    </Grid>
                         
                </Grid>
                
            
            </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(useStyles)(Profile);