import React, {Component} from 'react';
import { useState } from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Typography, Grid, Link, makeStyles } from '@material-ui/core';
import 'react-slideshow-image/dist/styles.css'
import classNames from 'classnames';
import { Fade } from 'react-slideshow-image';
import sage from '../Images/itch/last_sage.png';
import backfire from '../Images/itch/backfire.jpg';
import blob from '../Images/itch/blob_ai.jpg';
import hole from '../Images/itch/hole.png';


const useStyles = theme =>({
    head:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#fff",
        fontFamily:'JetBrainsMono'
    },
    grid:{
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'30%'
    },
    
});
const useStylesFunction = makeStyles((theme) =>({
    root:{
        '& h2':{
            padding: theme.spacing(2),
            color: "#fff",
            fontFamily:'JetBrainsMono'
        }
    },
    images:{
        width:"100%", 
        height:"100%"
    },
    text:{
        padding: theme.spacing(2),
        color: "#fff",
        fontFamily:'JetBrainsMono',
        textAlign:'center',
        height:"100%",

    },
    fade:{
        '&:hover':{
            "& $overlay":{
                opacity: 0.6,
                cursor:'pointer'
            }
        },
        backgroundSize:'cover',
        position:'relative',
        
    },
    overlay:{
        position: 'absolute',
        transition: '0.5s ease', 
        opacity: 0, 
        background: '#000' ,
        height: '100%', 
        width: '100%',
        zIndex:2,
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
        overflow:'hidden',
    },
    link:{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color:"#03fcd7",
        fontSize:"300%"
    }
    
}));


 
const fadeImages = [
  sage,backfire,blob,hole
];


const Slideshow = () => {
    const classes = useStylesFunction();
    const closs = classNames('image-container', classes.fade)
    //const [display, setDisplay] = useState('block');
    //onMouseEnter={() => setDisplay('block')} 
    //        onMouseLeave={() => setDisplay('none')}
    return (
        
        <div className="slide-container" className={classes.root} id="work">
            
            <Fade duration="2000" >
                <div className="each-fade">
                <div className={closs}>
                    <div className={classes.overlay}>
                        <div className={classes.text}>
                            <a  className={classes.link}
                                href="https://snakeeyes2799.itch.io/last-sage">
                                Last Sage
                            </a>
                        </div>
                    </div>
                    <img src={fadeImages[0]} className={classes.images} />     
                </div>
                </div>
                <div className="each-fade">
                <div className={closs}>
                <   div className={classes.overlay}>
                        <div className={classes.text}>
                            <a  className={classes.link}
                                href="https://anurag1212.itch.io/backfire">
                                Backfire
                            </a>
                        </div>
                    </div>
                    <img src={fadeImages[1]} className={classes.images} />
                </div>
                </div>
                <div className="each-fade">
                <div className={closs}>
                    <div className={classes.overlay}>
                        <div className={classes.text}>
                            <a  className={classes.link}
                                href="https://anurag1212.itch.io/blobai">
                                Blob.AI
                            </a>
                        </div>
                    </div>
                    <img src={fadeImages[2]} className={classes.images}/>
                </div>
                </div>
                <div className="each-fade">
                <div className={closs}>
                    <div className={classes.overlay}>
                        <div className={classes.text}>
                            <a  className={classes.link}
                                href="https://snakeeyes2799.itch.io/hole-in-black-linux">
                                Hole In Black
                            </a>
                        </div>
                    </div>
                    <img src={fadeImages[3]} className={classes.images} />
                </div>
                </div>
            </Fade>
        </div>
    )
}

class Work extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Grid container className={classes.grid}>
                    <Grid item  xs={12}>
                        <Typography variant="h3" className={classes.head}>Experience<hr/></Typography>
                        <ul className={classes.head}>
                            <li>
                                <Typography variant ="h5" className={classes.head} >
                                    I have created games for gamejams like Brackeys Game Jam 2020.1, 2020.2, 
                                    GMTK game jam 2020 and 
                                    Ludum dare 47
                                </Typography>
                                <Slideshow/>
                            </li>
                            <li>
                                <Typography variant ="h5" className={classes.head}>
                                    I have participated in Smart India Hackathon with my team.We were selected in 
                                    internal hackathon and went to national level.
                                </Typography>
                            </li>
                        </ul>
                        

                        
                        
                    </Grid>
                    <Grid item  xs={12}>
                        <Typography variant="h3" className={classes.head}>Work<hr/></Typography>
                        <Typography variant ="h5" className={classes.head}>
                            I have worked for Hammercraft studios as a game developer intern
                        </Typography>
                    </Grid>
                    
                </Grid>
                
            </div>
        )
    }
}

export default withStyles(useStyles)(Work);
