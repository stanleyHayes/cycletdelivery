import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Grid,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {CallOutlined, CloseOutlined, LocationOnOutlined, MailOutlined, Person2Outlined} from "@mui/icons-material";

const OrderForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: "", phone: "", message: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
            phone: yup.string().required("Field required"),
            category: yup.string().required("Field required"),
            location: yup.string().required("Field required"),
            vendor: yup.string().required("Field required"),
        })
    });

    return (
        <Grid container={true} spacing={4}>
            <Grid item={true} xs={12} md={6}>
                <Card
                    variant="elevation"
                    sx={{borderRadius: 4, backgroundColor: "background.paper"}}
                    elevation={0}>
                    <CardContent>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack direction="column" spacing={2}>
                                <Typography
                                    variant="h5"
                                    sx={{color: "text.primary", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                                    Personal{" "}
                                    <Typography
                                        component="span"
                                        variant="h5"
                                        sx={{
                                            color: "secondary.main",
                                            fontWeight: 700,
                                            mb: 3,
                                            fontFamily: "SatrevaNova"
                                        }}>
                                        Information
                                    </Typography>
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                        Your name
                                    </Typography>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <OutlinedInput
                                            value={formik.values.name}
                                            placeholder="Your Name"
                                            name="name"
                                            color="primary"
                                            sx={{borderRadius: 2}}
                                            startAdornment={<Person2Outlined sx={{fontSize: 20, mr: 2}}
                                                                             color="secondary"/>}
                                            type="text"
                                            required={true}
                                            size="medium"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.name && formik.errors.name)}
                                            fullWidth={true}
                                        />
                                        {formik.touched.name && formik.errors.name && (
                                            <FormHelperText>
                                                {formik.touched.name && formik.errors.name}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                        Email
                                    </Typography>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <OutlinedInput
                                            value={formik.values.email}
                                            placeholder="Your Email"
                                            name="email"
                                            sx={{borderRadius: 2}}
                                            startAdornment={<MailOutlined sx={{fontSize: 20, mr: 2}}
                                                                          color="secondary"/>}
                                            endAdornment={
                                                Boolean(formik.touched.email && formik.errors.email) && (
                                                    <CloseOutlined color="error"/>
                                                )
                                            }
                                            type="email"
                                            required={true}
                                            size="medium"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.email && formik.errors.email)}
                                            fullWidth={true}
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <FormHelperText>
                                                {formik.touched.email && formik.errors.email}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                        Phone
                                    </Typography>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <OutlinedInput
                                            value={formik.values.phone}
                                            placeholder="Your Phone"
                                            name="phone"
                                            sx={{borderRadius: 2}}
                                            startAdornment={
                                                <CallOutlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                            type="tel"
                                            required={true}
                                            size="medium"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.phone && formik.errors.phone)}
                                            fullWidth={true}
                                        />
                                        {formik.touched.phone && formik.errors.phone && (
                                            <FormHelperText>
                                                {formik.touched.phone && formik.errors.phone}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Box>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item={true} xs={12} md={6}>
                <Card
                    variant="elevation"
                    sx={{borderRadius: 4, backgroundColor: "background.paper"}}
                    elevation={0}>
                    <CardContent>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack direction="column" spacing={2}>
                                <Typography
                                    variant="h5"
                                    sx={{color: "text.primary", fontWeight: 700, mb: 3, fontFamily: "SatrevaNova"}}>
                                    Order{" "}
                                    <Typography
                                        component="span"
                                        variant="h5"
                                        sx={{
                                            color: "secondary.main",
                                            fontWeight: 700,
                                            mb: 3,
                                            fontFamily: "SatrevaNova"
                                        }}>
                                        Information
                                    </Typography>
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                        Category
                                    </Typography>
                                    <Box>
                                        <FormControl fullWidth={true}>
                                            <Select
                                                size="medium"
                                                id="category"
                                                name="category"
                                                fullWidth={true}
                                                value={formik.values.category}
                                                error={formik.touched.category && Boolean(formik.errors.category)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}>
                                                <MenuItem value="">Select Input</MenuItem>
                                                <MenuItem value="Student">Student</MenuItem>
                                                <MenuItem value="Lecturer">Lecturer</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </Select>
                                            {formik.touched.category && formik.errors.category && (
                                                <FormHelperText>
                                                    {formik.errors.category}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                        Location
                                    </Typography>
                                    <FormControl fullWidth={true} variant="outlined">
                                        <OutlinedInput
                                            value={formik.values.location}
                                            placeholder="Your location"
                                            name="location"
                                            sx={{borderRadius: 2}}
                                            startAdornment={<LocationOnOutlined sx={{fontSize: 20, mr: 2}}
                                                                                color="secondary"/>}
                                            type="text"
                                            required={true}
                                            size="medium"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.location && formik.errors.location)}
                                            fullWidth={true}
                                        />
                                        {formik.touched.phone && formik.errors.location && (
                                            <FormHelperText>
                                                {formik.touched.location && formik.errors.location}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                        Vendor
                                    </Typography>
                                    <FormControl fullWidth={true}>
                                        <Select
                                            size="medium"
                                            id="vendor"
                                            name="vendor"
                                            fullWidth={true}
                                            type="text"
                                            value={formik.values.vendor}
                                            error={formik.touched.vendor && Boolean(formik.errors.vendor)}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}>
                                            <MenuItem value="">Select Vendor</MenuItem>
                                            <MenuItem value="Student">Wafflemania</MenuItem>
                                            <MenuItem value="Lecturer">Cafetaria</MenuItem>
                                        </Select>
                                        {formik.touched.vendor && formik.errors.vendor && (
                                            <FormHelperText>
                                                {formik.errors.vendor}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Box>
                                <Button
                                    type="submit"
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
                                    Place Order
                                </Button>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default OrderForm;