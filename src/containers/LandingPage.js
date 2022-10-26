import {Link} from "react-router-dom"
import Button from '@mui/material/Button';

function RegisterButton() {

    return <Link to="/Register">
        <Button variant="contained" > 
            <span style={{"font-size": "25px" }}>
                SIGN UP
            </span>
        </Button>
    </Link>
}
function LoginButton() {

    return <Link to="/Login">
        <Button variant="contained" > 
            <span style={{"font-size": "25px" }}>
                LOGIN
            </span>
        </Button>
    </Link>
}

function LandingFrameMessage() {

    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }

    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            HELLO 
        </div>
        
        <div style={{"font-size": "36px"}}>
            WELCOM TO MOVIE APP
        </div>

        <br />

        <RegisterButton />
        <LoginButton />

    </div>
}

function LandingFrame() {
    const style = {

        "background-image": `url("https://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }

    return <div style={style}>
        <LandingFrameMessage />        
    </div>
}

function LandingPage() {
    return <div>
        <LandingFrame />
    </div>
}

export default LandingPage