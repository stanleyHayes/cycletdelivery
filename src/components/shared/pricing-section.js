import {Box, Container, Grid, Stack, Typography, useTheme} from "@mui/material";
import {TrendingFlatOutlined} from "@mui/icons-material";
import {CYCLET_DELIVERY_DATA} from "../../utils/data";
import Pricing from "./pricing";

const PricingSection = () => {

    const theme = useTheme();

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={4}>
                        <Box>
                            <Stack direction="column" spacing={4}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                        Our{" "}
                                        <Typography
                                            component="span"
                                            variant="h4"
                                            sx={{
                                                color: "secondary.main",
                                                fontFamily: "RayleighGlamour",
                                                fontWeight: 700
                                            }}>
                                            Pricing
                                        </Typography>
                                    </Typography>
                                </Box>

                                <Box>
                                    <Grid container={true}>
                                        <Grid item={true} xs={12} md={8}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color:
                                                        theme.palette.mode === "dark" ?
                                                            "rgba(255, 255, 255, 0.75)" :
                                                            "rgba(0, 0, 0, 0.75)"
                                                }}>
                                                Falcon deliveries at snail prices.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid container={true} spacing={2}>
                            {CYCLET_DELIVERY_DATA.PRICING.map((pricing, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                        <Pricing pricing={pricing}/>
                                    </Grid>
                                )
                            })}
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Stack
                                    sx={{height: "100%"}}
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="center">
                                    <TrendingFlatOutlined
                                        sx={{
                                            color: "icon.accent",
                                            padding: 1,
                                            fontSize: 80,
                                            borderRadius: "100%",
                                            backgroundColor: "icon.accentBackground"
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default PricingSection;