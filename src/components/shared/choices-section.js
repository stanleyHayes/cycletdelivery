import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {GroupOutlined, WorkspacePremiumOutlined} from "@mui/icons-material";
import {Link} from "react-scroll";
import Choice from "./choice";

const ChoicesSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4} justifyContent="center">
                    <Box>
                        <Typography
                            align="center"
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            Reasons to{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                choose
                            </Typography>
                            {" "}us
                        </Typography>
                    </Box>

                    <Box>
                        <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                            Cyclet Delivery is a delivery service that delivers food for students, lectures and other
                            members of ACADEMIC CITY administration.
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <GroupOutlined
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 40,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground"
                                            }}
                                        />
                                    }
                                    title="Our goal"
                                    description="The goal of Cyclet delivery is to provide fast and effective replies to our customer's needs concerning delivery."
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Choice
                                    icon={
                                        <WorkspacePremiumOutlined
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 40,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground"
                                            }}
                                        />
                                    }
                                    title="Our vision"
                                    description="The vision of Cyclet delivery is to facilitate people getting their stuff safely and effortless."
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs={12} md={2}>
                                <Link to="contact" delay={50} offset={50} duration={250}>
                                    <Button
                                        fullWidth={true}
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            textTransform: "capitalize",
                                            color: "colors.accent",
                                            borderRadius: 2,
                                            borderWidth: 2,
                                            borderColor: "colors.accent",
                                            borderStyle: "solid",
                                            fontWeight: 700,
                                            fontFamily: "SatrevaNova"
                                        }}>
                                        Contact Us
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ChoicesSection;