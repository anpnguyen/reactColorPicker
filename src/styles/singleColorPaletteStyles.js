export default {

    Palette: {
        height: '95vh',
        display:'flex',
        flexDirection: 'column'
    },
    
    PaletteColors: {
        height: "90%"
    },
    
    goBackBox: {
        width: "20%",
        background: "black",
        height: "50%" ,
        margin:  "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        opacity: "1",
            "& a": {
                width: '100px',
                height:'30px',
                position: 'absolute',
                display: 'inline-block',
                top:'50%',
                left: '50%',
                marginLeft: '-50px',
                marginTop: '-15px',
                textAlign: 'center',
                outline: 'none',
                background: 'rgba(255,255,255,0.3)',
                fontSize: '1rem',
                lineHeight: '30px',
                textTransform: 'uppercase',
                border: 'none',
                textDecoration: 'none',
                color: "white"

            }

        }
    
    }