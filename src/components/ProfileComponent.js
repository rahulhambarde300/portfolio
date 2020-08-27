import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
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
import logo from '../logo.svg';
import node from '../Images/node.png';
import express from '../Images/express.png';
import unity from '../Images/unity.png';
import ps from '../Images/ps.webp';
import blender from '../Images/blender.png';
import maya from '../Images/maya.png';
import github from '../Images/github.png';
import mongo from '../Images/mongo.webp';


const useStyles = theme =>({
    head:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#fff",
        fontFamily:'JetBrainsMono'
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#fff",
        fontFamily:'JetBrainsMono'
    },
    grid:{
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'30%',
    },
    list:{
        listStyleType:'none',
        fontSize: "125%",
        paddingBottom:"200px",
        '& li':{
            paddingBottom:"10px",
        }
    },
    img:{
        width:'30px', 
        height:'30px',
        verticalAlign:"middle"
    },
    tabs:{
        backgroundColor : "theme.palette.paper",
        textAlign : "left",
        color:"#fff",
        
    },
    appBar:{
        boxShadow : "none"
    },



})

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
            <div id="profile">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.head}>About Me<hr/></Typography>
                        <Typography variant ="h5" className={classes.paper}>
                                I am a computer science student from Maharashtra, India.I am specialized in game and web development.
                                I love to bring my ideas into reality though my code.<br/>
                                I am an emerging game developer and I've developed many games for game jams and a few for interships.
                                I am currently pursuing my degree from SGGSIE&T.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.head}>Here are the languages and tools I use:</Typography>
                    </Grid>

                    <Grid item xs={4} >
                        <h2 className={classes.paper}>LANGUAGES</h2>
                        <ul className={closs}>
                            
                            <li><img src={c} className = {classes.img} alt="C"/>C</li>
                            <li><img src={java} className = {classes.img} alt="Java"/>Java</li>
                            <li><img src={cs} className = {classes.img} alt="C#"/>C#</li>
                            <li><img src={python} className = {classes.img} alt="Python"/>Python</li>
                            <li><img src={js} className = {classes.img} alt="JS"/>Javascript</li>
                            <li><img src={php} className = {classes.img} alt="PHP"/>PHP</li>
                            <li><img src={sql} className = {classes.img} alt="SQL"/>SQL</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className={classes.paper}>FRAMEWORKS</h2>
                        <ul className={closs}>
                            <li><img src={logo} className = {classes.img} alt="React"/>ReactJS</li>
                            <li><img src={node} className = {classes.img} alt="Node"/>NodeJS</li>
                            <li><img src={express} className = {classes.img} alt="Express"/>ExpressJS</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                        <h2 className={classes.paper}>TOOLS</h2>
                        <ul className={closs}>
                            <li><img src={unity} className = {classes.img} alt="Unity3D"/>Unity3D</li>
                            <li><img src={ps} className = {classes.img} alt="Photoshop"/>Photoshop</li>
                            <li><img src={blender} className = {classes.img} alt="Blender"/>Blender</li>
                            <li><img src={maya} className = {classes.img} alt="Maya"/>Maya</li>
                            <li><img src={github} className = {classes.img} alt="Github"/>Github</li>
                            <li><img src={mongo} className = {classes.img} alt="Mongo"/>MongoDB</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container className={classes.grid}>
                    <Grid item xs={12} >
                        <Typography variant="h3" className={classes.head}>Education<hr/></Typography>
                        <div className={classes.tabs}>
                            <TabContext value={this.state.value}>
                                <AppBar position="static" color='transparent' className={classes.appBar}> 
                                    <TabList onChange={this.handleChange} aria-label="Education"  
                                    indicatorColor="primary"
                                    textColor="inherit">
                                        <Tab label="SSC" value="1" className={classes.head}/>
                                        <Tab label="HSC" value="2" className={classes.head}/>
                                        <Tab label="Engineering" value="3" className={classes.head}/>
                                    </TabList>
                                </AppBar>
                                <TabPanel value="1" className={classes.head}>
                                    <h2>School : Mahatma Phule High School, Nanded</h2>
                                    <h3>Time : June 2005 - March 2015</h3>
                                    <h3>Percentage : 93.2%</h3>
                                </TabPanel>
                                <TabPanel value="2" className={classes.head}>
                                    <h2>College : Yashwant Mahavidyala, Nanded</h2>
                                    <h3>Time : June 2015 - February 2017</h3>
                                    <h3>Percentage : 79.6%</h3>
                                </TabPanel>
                                <TabPanel value="3" className={classes.head}>
                                    <h2>College : Shri Guru Gobind Singhji IE & T , Nanded</h2>
                                    <h3>Time : June 2017 - Present</h3>
                                    <h3>Branch : Computer Science</h3>
                                </TabPanel>
                            </TabContext>
                        </div>
                        
                    </Grid>
                         
                </Grid>
                
            
            </div>
        );
    }
}

export default withStyles(useStyles)(Profile);