import {Box, CardMedia, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import {CallOutlined, LocationOnOutlined, MailOutline, ScheduleOutlined} from "@mui/icons-material";

const DesktopFooter = () => {
    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid item={true} lg={3}>
                    <Stack spacing={3}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova",
                                    letterSpacing: 1.4,
                                }}>
                                Unona
                            </Typography>
                        </Link>
                        <Box>
                            <Stack justifyContent="flex-start" direction="row" spacing={3}>
                                <CardMedia
                                    src={logo}
                                    sx={{
                                        height: 150,
                                        objectPosition: "center",
                                        objectFit: "contain"
                                    }}
                                    component="img"
                                />
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Main
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                About company
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Our chemicals
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Our equipment
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Work
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Contacts
                            </Typography>
                        </Link>
                    </Stack>

                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Cleaning
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                After pest control
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Post-construction
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                After tenants
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Premises
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Dry cleaning of furniture
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Contact Info
                        </Typography>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <CallOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="tel://+380334268644" style={{textDecoration: "none"}}>
                                    <Typography variant="body2" sx={{color: "white", fontFamily: "Urbanist"}}>
                                        +38 033-426 86 44
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <LocationOnOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", fontFamily: "Urbanist"}}>
                                        Kyiv,Vidradnyi avenue 55
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <MailOutline
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="mailto://info@unonacleaning.com" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", fontFamily: "Urbanist"}}>
                                        info@unonacleaning.com
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <ScheduleOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", fontFamily: "Urbanist"}}>
                                        Mon-Fri: 09:.00 am - 05:00 pm
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <ScheduleOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{color: "white", fontFamily: "Urbanist"}}>
                                    Saturday, Sunday: closed
                                </Typography>
                            </Stack>
                        </Box>

                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DesktopFooter;