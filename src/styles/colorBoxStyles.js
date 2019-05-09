import chroma from 'chroma-js'
import sizes from './sizes'

export default {

    ColorBox: {
        width: "20%",
        height: props => props.showFullPalette? "25%" :"50%" ,
        margin:  "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s"
           
        },
        [sizes.down('lg')]: {
            width: "25%",
            height: props => props.showFullPalette? "20%" :"50%"
        },
        [sizes.down('md')]: {
            width: "50%",
            height: props => props.showFullPalette? "10%" :"20%"
        },
        [sizes.down('xs')]: {
            width: "100%",
            height: props => props.showFullPalette? "5%" :"10%"
        }
    
    },

    CopyText: {
        color: props => chroma(props.background).luminance()  >= 0.5? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance()  >= 0.5? "black" : "white"
    },

    seeMore:{
        
        background: "rgba(255,255,255,0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom:"0px",
        color: props => chroma(props.background).luminance()  >= 0.5? "black" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        textTransform: "uppercase"
    },

    copyButton: {
        color: props => chroma(props.background).luminance()  >= 0.5? "black" : "white",
        width: "100px",
        height:"30px",
        position: "absolute",
        display: "inline-block",
        top:"50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
        
        
    },

    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom:"0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },

    copyOverlay: {
        opacity: "0",
        zIndex:"0",
        width:"100%",
        height:"100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    
    
    },

    copyMsg :{
        position: "fixed",
        left:"0",
        right:"0",
        top:"0",
        bottom:"0",
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        color:"white",
        opacity: "0",
        zIndex:"25"
    
    },

    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
        
    },

    showMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.2)",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "0",
            padding: "1rem"
            },

        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
                                     
    }
        
}