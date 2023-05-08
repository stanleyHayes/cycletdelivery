import {Box, Container, Grid, Link, Stack, Typography} from "@mui/material";
import {HomeOutlined, MailOutline, PhoneOutlined} from "@mui/icons-material";
import ContactForm from "./contact-form";
import Info from "./info";
import banner from "./../../assets/images/blog/pexels-nathan-cowley-713297.jpg";

const ContactSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Box>
                    <Grid container={true} spacing={4} justifyContent="space-between">
                        <Grid item={true} xs={12} md={6}>
                            <Box>
                                <Stack direction="column" spacing={4}>
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                            Get In Touch{" "}
                                            <Typography
                                                component="span"
                                                variant="h4" sx={{
                                                color: "secondary.main",
                                                fontFamily: "SatrevaNova",
                                                fontWeight: 700
                                            }}>
                                                With
                                            </Typography>
                                            {" "}Us
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Grid container={true}>
                                            <Grid item={true} xs={12} md={6}>
                                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                                    We'd really like to hear from you!
                                                    24/7
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <Info
                                            icon={
                                                <HomeOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 40,
                                                        borderRadius: "25%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            value={
                                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                                    Property #279-302, Agbogba - Ashongman Rd, Haatso
                                                    Academic City University College
                                                </Typography>
                                            }
                                            label={
                                                <Typography variant="h6" sx={{color: "text.primary"}}>
                                                    Our Location
                                                </Typography>
                                            }
                                        />
                                    </Box>
                                    <Box>
                                        <Info
                                            icon={
                                                <PhoneOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 40,
                                                        borderRadius: "25%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            value={
                                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                                    (+233) 256 545 733
                                                </Typography>
                                            }
                                            label={
                                                <Typography variant="h6" sx={{color: "text.primary"}}>
                                                    Phone Number
                                                </Typography>
                                            }
                                        />
                                    </Box>
                                    <Box>
                                        <Info
                                            icon={
                                                <MailOutline
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 40,
                                                        borderRadius: "25%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            value={
                                                <Link href="mailto://info@anona.com" underline="none">
                                                    <Typography variant="body1" sx={{color: "text.secondary"}}>
                                                        cycletdelivery@gmail.com
                                                    </Typography>
                                                </Link>
                                            }
                                            label={
                                                <Typography variant="h6" sx={{color: "text.primary"}}>
                                                    Email Address
                                                </Typography>
                                            }
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundImage: `${banner}`,
                                    height: "100%",
                                }}>
                                <ContactForm/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactSection;