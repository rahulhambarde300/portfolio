import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styled from 'styled-components'
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
        fontFamily:'JetBrainsMono',
    },
    paper:{
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
            <div id="profile">
                <Grid container className={classes.grid}>
                    <Grid item xs={12}>
                        <Styledhead className={classes.head}>About Me<hr/></Styledhead>
                        <Styledpara className={classes.paper}>
                                I am a computer science student from Maharashtra, India.I am specialized in game and web development.
                                I love to bring my ideas into reality though my code.<br/>
                                I am an emerging game developer and I've developed many games for game jams and a few for interships.
                                I am currently pursuing my degree from SGGSIE&T.
                        </Styledpara>
                    </Grid>

                    <Grid item xs={12}>
                        <Styledpara className={classes.head}>Here are the languages and tools I use:</Styledpara>
                    </Grid>

                    <Grid item xs={4} >
                        <h3 className={classes.paper}>LANGUAGES</h3>
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
                        <h3 className={classes.paper}>FRAMEWORKS</h3>
                        <ul className={closs}>
                            <Styledli><Styledimg src={logo} className = {classes.img} alt="React"/>ReactJS</Styledli>
                            <Styledli><Styledimg src={node} className = {classes.img} alt="Node"/>NodeJS</Styledli>
                            <Styledli><Styledimg src={express} className = {classes.img} alt="Express"/>ExpressJS</Styledli>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                        <h3 className={classes.paper}>TOOLS</h3>
                        <ul className={closs}>
                            <Styledli><Styledimg src={unity} className = {classes.img} alt="Unity3D"/>Unity3D</Styledli>
                            <Styledli><Styledimg src={ps} className = {classes.img} alt="Photoshop"/>Photoshop</Styledli>
                            <Styledli><Styledimg src={blender} className = {classes.img} alt="Blender"/>Blender</Styledli>
                            <Styledli><Styledimg src={maya} className = {classes.img} alt="Maya"/>Maya</Styledli>
                            <Styledli><Styledimg src={github} className = {classes.img} alt="Github"/>Github</Styledli>
                            <Styledli><Styledimg src={mongo} className = {classes.img} alt="Mongo"/>MongoDB</Styledli>
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
                                        <Tab label="SSC" value="1" className={classes.head}/>
                                        <Tab label="HSC" value="2" className={classes.head}/>
                                        <Tab label="Engineering" value="3" className={classes.head}/>
                                    </TabList>
                                </AppBar>
                                <TabPanel value="1" className={classes.head}>
                                    <h3>School : Mahatma Phule High School, Nanded</h3>
                                    <h4>Time : June 2005 - March 2015</h4>
                                    <h4>Percentage : 93.2%</h4>
                                </TabPanel>
                                <TabPanel value="2" className={classes.head}>
                                    <h3>College : Yashwant Mahavidyala, Nanded</h3>
                                    <h4>Time : June 2015 - February 2017</h4>
                                    <h4>Percentage : 79.6%</h4>
                                </TabPanel>
                                <TabPanel value="3" className={classes.head}>
                                    <h3>College : Shri Guru Gobind Singhji IE & T , Nanded</h3>
                                    <h4>Time : June 2017 - Present</h4>
                                    <h4>Branch : Computer Science</h4>
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