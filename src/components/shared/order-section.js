import {Box, Container} from "@mui/material";
import banner from "./../../assets/images/banner/banner.jpg";
import OrderForm from "./order-form";

const OrderSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundImage: `url(${banner})`,
                minHeight: "50vh",
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.33)",
                backdropFilter: "blur(35px)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                paddingY: 8
            }}>
            <Container maxWidth="xl">
                <OrderForm/>
            </Container>
        </Box>
    )
}

export default OrderSection;