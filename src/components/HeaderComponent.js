import React, { Component } from 'react';
import { useState } from 'react';
import {withStyles} from '@material-ui/core/styles'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import cover from '../Images/cover.png';
import R from '../Images/R.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Home from './HomeComponent';
import Profile from './ProfileComponent';
import Work from './WorkComponent';
import Contact from './ContactComponent';
import {Link} from 'react-scroll';



const useStyles = theme =>({
    appBar:{
      background: '#000',
      boxShadow: "0px 2px 10px #222",
      backgroundSize:"cover"
    },

    row:{
      justifyContent : "center"
    },

    button:{
      flexDirection:'column',
      color: '#777',
      transition: "0.2s",
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#000",
        color: '#fff'
      },
    },
    logo:{
      width : "60px", 
      height : "60px", 
      position : 'relative',
      paddingLeft:'5px',
      paddingRight:'5px'
    },
    overlay:{
      position: 'absolute',
      transition: '0.5s ease', 
      zIndex:2,
      overflow:'hidden',
      width : "50px", 
      height : "50px", 
  },


})

const ColoredLine = ({ color, width }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 3,
          width : width+"%",
          border : 0,
          transition: " 0.2s",
          margin : 0
      }}
  />
);




const NavButton = ({text, classes, link}) =>{
  const [width, setWidth] = useState(0);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(link);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return(
    <Button className={classes.button} 
      onMouseEnter={() => setWidth(100)} 
      onMouseLeave={() => setWidth(0)}
      onClick={handleClick}
      >
      <view>
        <Typography style = {{marginBottom : 0, fontFamily:'JetBrainsMono'}}>{text}</Typography>
        <ColoredLine   color = "#86c232" width = {width}/>
      </view>
    </Button>


  );
  
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  
  return (
    
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : "Home",
            hover : false,
            rotate : 0
        }
         
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleChange = (event, newValue) => {
        this.setState({
            value : newValue
        })
      };
    
    toggleHover = () =>{
      this.setState({
        hover : !this.state.hover
      })
    }

    handleScroll = () =>{
      console.log("Scrolled");
      this.setState({
        rotate :  window.pageYOffset/4
      })
    }

    render(){
        const {classes} = this.props;
        return(
          <div style={{ backgroundColor: '#000'}} id="home">
            <CssBaseline/>
            <HideOnScroll {...this.props}>

              <AppBar position="fixed" className={classes.appBar} >
                <Toolbar className={classes.row}>
                  <NavButton text="Home" classes = {classes} link="#home" />
                  <NavButton text="Profile" classes = {classes} link="#profile"/>
                  
                  <img src={cover} className={classes.logo} 
                    style={{transform: `rotate(${this.state.rotate}deg)`}}
                    />
                  <img src={R} className={classes.overlay}/>
                  <NavButton text="Work" classes = {classes} link="#work"/>
                  <NavButton text="Contact" classes = {classes} link="#contact"/>
                  
                </Toolbar>
                
              </AppBar>
            </HideOnScroll>
            
          </div>
        )
    }
}

export default withStyles(useStyles)(Header);