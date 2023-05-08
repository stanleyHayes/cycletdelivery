import {Box, CardMedia, CircularProgress, Container, Stack, Typography} from "@mui/material";
import logo from "../../assets/images/logo/logo.png";

const Splash = () => {
    return (
        <Box sx={{maxHeight: "100vh", height: "100vh", display: "flex", alignItems: "center"}}>
            <Container>
                <Stack spacing={3}>
                    <Box>
                        <Typography align="center" variant="h2" sx={{color: "text.primary", fontWeight: 800}}>
                            <Typography
                                component="span"
                                variant="h4"
                                sx={{
                                    color: "colors.accent",
                                    backgroundColor: "light.accent",
                                    fontWeight: 800,
                                    px: 1,
                                    fontFamily: "SatrevaNova",
                                    borderRadius: 2
                                }}>
                                Cyclet
                            </Typography>
                            <Typography
                                component="span"
                                variant="h4"
                                sx={{
                                    color: "secondary.main",
                                    backgroundColor: "light.secondary",
                                    fontWeight: 800,
                                    px: 1,
                                    fontFamily: "SatrevaNova",
                                    borderRadius: 2
                                }}>
                                Delivery
                            </Typography>
                        </Typography>

                        <Typography
                            variant="body1"
                            align="center"
                            sx={{
                                color: "secondary.main",
                                fontWeight: 600,
                                fontFamily: "Urbanist"
                            }}>
                            Falcon pace at snail prices
                        </Typography>
                    </Box>
                    <Box>
                        <Stack justifyContent="center" direction="row" spacing={3}>
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
                    <Box>
                        <Stack justifyContent="center" direction="row" spacing={3}>
                            <CircularProgress variant="indeterminate" color="secondary" size={50}/>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                textTransform: "none",
                                color: "colors.accent",
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4,
                                fontWeight: 700
                            }}>
                            Setting up. Please wait...
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Splash;