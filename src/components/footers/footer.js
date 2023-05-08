import {Box, Divider} from "@mui/material";
import Copyright from "../shared/copyright";

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "colors.footer"}}>
            <Divider variant="fullWidth" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)"}} light={true}/>
            <Box>
                <Copyright/>
            </Box>
        </Box>
    )
}

export default Footer;