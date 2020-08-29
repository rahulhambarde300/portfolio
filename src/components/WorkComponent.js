import React, {Component} from 'react';
import styled from 'styled-components';
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
        textAlign: 'left',
        color: "#86c232",
        fontFamily:'JetBrainsMono'
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "#a8b0b5",
        fontFamily:'JetBrainsMono',

    },
    grid:{
        paddingLeft:'7%',
        paddingRight:'7%',
        paddingBottom:'7%'
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
        color:"#86c232",
        fontSize:"300%"
    }
    
}));

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
 
const Styledanchor = styled.a`
    font-size:30px;
    @media (max-width: 767px) {
        font-size:20px;
    }
`

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
            
            <Fade duration="2000" transitionDuration="500">
                <div className="each-fade">
                <div className={closs}>
                    <div className={classes.overlay}>
                        <div className={classes.text}>
                            <Styledanchor  className={classes.link}
                                href="https://snakeeyes2799.itch.io/last-sage">
                                Last Sage
                            </Styledanchor>
                        </div>
                    </div>
                    <img src={fadeImages[0]} className={classes.images} />     
                </div>
                </div>
                <div className="each-fade">
                <div className={closs}>
                <   div className={classes.overlay}>
                        <div className={classes.text}>
                            <Styledanchor  className={classes.link}
                                href="https://anurag1212.itch.io/backfire">
                                Backfire
                            </Styledanchor>
                        </div>
                    </div>
                    <img src={fadeImages[1]} className={classes.images} />
                </div>
                </div>
                <div className="each-fade">
                <div className={closs}>
                    <div className={classes.overlay}>
                        <div className={classes.text}>
                            <Styledanchor className={classes.link}
                                href="https://anurag1212.itch.io/blobai">
                                Blob.AI
                            </Styledanchor>
                        </div>
                    </div>
                    <img src={fadeImages[2]} className={classes.images}/>
                </div>
                </div>
                <div className="each-fade">
                <div className={closs}>
                    <div className={classes.overlay}>
                        <div className={classes.text}>
                            <Styledanchor className={classes.link}
                                href="https://snakeeyes2799.itch.io/hole-in-black-linux">
                                Hole In Black
                            </Styledanchor>
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
                        <Styledhead className={classes.head}>Experience<hr/></Styledhead>
                        <ul className={classes.head}>
                            <li>
                                <Styledpara  className={classes.paper} >
                                    I have created games for gamejams like Brackeys Game Jam 2020.1, 2020.2, 
                                    GMTK game jam 2020 and 
                                    Ludum dare 47
                                </Styledpara >
                                <Slideshow/>
                            </li>
                            <li>
                                <Styledpara  className={classes.paper}>
                                    I have participated in Smart India Hackathon with my team.We were selected in 
                                    internal hackathon and went to national level.
                                </Styledpara >
                            </li>
                        </ul>
                        

                        
                        
                    </Grid>
                    <Grid item  xs={12}>
                        <Styledhead className={classes.head}>Work<hr/></Styledhead>
                        <Styledpara  className={classes.paper}>
                            I have worked for Hammercraft studios as a game developer intern
                        </Styledpara >
                    </Grid>
                    
                </Grid>
                
            </div>
        )
    }
}

export default withStyles(useStyles)(Work);
