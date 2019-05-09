const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin:  "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover svg": {
            color:"white",
            transform: "scale(1.5)"
        }
                  
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
    deleteIcon :{
        position: "absolute",
        color: "black",
        right: "0px",
        bottom:"5px",
        transition: "all 0.3s ease-in-out"
    }
}

export default styles