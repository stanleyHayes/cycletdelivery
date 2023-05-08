import {Avatar, Card, CardContent, Stack, Typography} from "@mui/material";
import {UTILS} from "../../utils/utils";

const Staff = ({staff}) => {
    console.log(UTILS.getInitials(staff.name))
    return (
        <Card elevation={0} sx={{backgroundColor: "background.default"}}>
            <Avatar
                sx={{borderRadius: 2, height: {xs: 200}, backgroundColor: "light.secondary", width: "100%"}}>
                <Typography variant="h3" align="center" sx={{color: "secondary.main", fontWeight: 600}}>
                    {UTILS.getInitials(staff.name)}
                </Typography>
            </Avatar>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h6" align="center" sx={{color: "text.primary", fontWeight: 600}}>
                        {staff.name}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{color: "text.secondary"}}>
                        {staff.role}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}


export default Staff;