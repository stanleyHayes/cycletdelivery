import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import currencyFormatter from "currency-formatter";

const Pricing = ({pricing}) => {
    return (
        <Card sx={{backgroundColor: "background.default", height: "100%"}} elevation={0}>
            <CardMedia
                component="img"
                src={pricing.image}
                sx={{
                    height: 120,
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: 2,
                    padding: 2
                }}
            />
            <CardContent>
                <Typography variant="body1" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1, fontSize: 20}}>
                    {pricing.category}
                </Typography>
                <Typography align="center" variant="body2" sx={{color: "text.secondary", fontSize: 24}}>
                    {currencyFormatter.format(pricing.price.amount, {code: pricing.price.currency})}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default Pricing;