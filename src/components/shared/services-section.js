import {Avatar, Box, Container, Grid, Stack, Typography} from "@mui/material";
import Service from "./service";
import delivery from "./../../assets/images/services/delivery.png";
import placeOrder from "./../../assets/images/services/order.png";
import makePayment from "./../../assets/images/services/payment-method.png";
import pickupOrder from "./../../assets/images/services/pickup.png";

const ServicesSection = () => {

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            How it {" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                Works
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Service
                                    backgroundColor="light.accent"
                                    icon={
                                        <Avatar
                                            src={placeOrder}
                                            sx={{
                                                color: "colors.accent",
                                                padding: 1,
                                                fontSize: 32,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.accentBackground",
                                                width: 75, height: 75
                                            }}
                                        />
                                    }
                                    title="Place Order"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Service
                                    backgroundColor="light.secondary"
                                    icon={
                                        <Avatar
                                            src={pickupOrder}
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 32,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground",
                                                width: 75, height: 75
                                            }}
                                        />
                                    }
                                    title="Pickup Order"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Service
                                    backgroundColor="light.secondary"
                                    icon={
                                        <Avatar
                                            src={delivery}
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 32,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground",
                                                width: 75, height: 75
                                            }}
                                        />
                                    }
                                    title="Deliver Order"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6} lg={3}>
                                <Service
                                    backgroundColor="light.secondary"
                                    icon={
                                        <Avatar
                                            src={makePayment}
                                            sx={{
                                                color: "icon.secondary",
                                                padding: 1,
                                                fontSize: 32,
                                                borderRadius: "100%",
                                                backgroundColor: "icon.secondaryBackground",
                                                width: 75, height: 75
                                            }}
                                        />
                                    }
                                    title="Make Payment"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ServicesSection;