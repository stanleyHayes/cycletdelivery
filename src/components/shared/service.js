import {Box, Card, CardContent, Stack, Typography} from "@mui/material";

const Service = ({icon, title, backgroundColor = "light.secondary"}) => {
    return (
        <Card elevation={0} sx={{backgroundColor, borderRadius: 4, height: "100%"}}>
            <CardContent>
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Stack direction="row" justifyContent="center">
                            {icon}
                        </Stack>
                    </Box>
                    <Typography variant="h6" align="center" sx={{color: "text.primary", fontWeight: 700}}>
                        {title}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Service;