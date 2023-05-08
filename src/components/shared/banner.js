import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import {Link as ScrollLink} from "react-scroll";
import logo from "./../../assets/images/logo/logo.png";

const Banner = () => {

    return (
        <Box sx={{width: "100%", minHeight: "50vh", alignItems: "center", display: "flex"}}>
            <Container maxWidth="lg">
                <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid item={true} xs={12} md={6}>
                        <Box>
                            <Stack spacing={4}>
                                <Typography variant="h2" sx={{color: "text.primary", fontWeight: 800}}>
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "colors.accent",
                                            backgroundColor: "light.accent",
                                            fontWeight: 800,
                                            px: 1,
                                            fontFamily: "SatrevaNova",
                                            borderRadius: 2,
                                            fontSize: {xs: 40, md: 48, lg: 60}
                                        }}>
                                        Cyclet
                                    </Typography>
                                    {" "}
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "secondary.main",
                                            backgroundColor: "light.secondary",
                                            fontWeight: 800,
                                            px: 1,
                                            fontFamily: "SatrevaNova",
                                            borderRadius: 2,
                                            fontSize: {xs: 40, md: 48, lg: 60}
                                        }}>
                                        Delivery
                                    </Typography>
                                </Typography>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    Falcon pace at snail prices
                                </Typography>
                                <Box>
                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={4}>
                                            <ScrollLink to="contact" smooth={true} spy={true} offset={50} duration={500} delay={100}>
                                                <Button
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
                                                    sx={{
                                                        textTransform: "capitalize",
                                                        color: "white",
                                                        borderRadius: 2,
                                                        fontWeight: 700,
                                                        backgroundColor: "secondary.main",
                                                        fontFamily: "SatrevaNova"
                                                    }}>
                                                    Contact Us
                                                </Button>
                                            </ScrollLink>
                                        </Grid>
                                        <Grid item={true} xs={12} md={4}>
                                            <ScrollLink to="order" smooth={true} spy={true} offset={50} duration={500} delay={100}>
                                                <Button
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
                                                    sx={{
                                                        textTransform: "capitalize",
                                                        color: "secondary.main",
                                                        borderRadius: 2,
                                                        fontWeight: 700,
                                                        borderColor: "secondary.main",
                                                        borderStyle: "solid",
                                                        borderWidth: 2,
                                                        fontFamily: "SatrevaNova"
                                                    }}>
                                                    Order Now
                                                </Button>
                                            </ScrollLink>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            src={logo}
                                            sx={{
                                                borderTopLeftRadius: 64,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 64,
                                                borderBottomLeftRadius: 0,
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                                height: {xs: 250, lg: 350}
                                            }}
                                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner;