import {Box, Button, CardMedia, Divider, Link as MUILink, Stack, Typography} from "@mui/material";
import NavigationLink from "./navigation-link";
import {AnimatePresence, motion} from "framer-motion";
import {CloseOutlined, DarkModeOutlined, LightModeOutlined, WifiCalling3Outlined} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {Link as ScrollLink} from "react-scroll";
import logo from "../../assets/images/logo/logo.png";

const DrawerContent = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{py: 4}}>
            <Stack
                direction="column"
                divider={<Divider sx={{my: 2}} variant="fullWidth" light={true}/>}>
                <Stack
                    sx={{px: 4}}
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between">

                    <AnimatePresence initial={true} mode="sync">
                        {theme === "dark" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <LightModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "25%",
                                        cursor: "pointer",
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <AnimatePresence initial={true} mode="sync">
                        {theme === "light" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <DarkModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "25%",
                                        cursor: "pointer",
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <CloseOutlined
                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(false))}
                        sx={{
                            color: "colors.accent",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "25%",
                            cursor: "pointer",
                            backgroundColor: "icon.accentBackground"
                        }}/>
                </Stack>
                <Box sx={{px: 4}}>
                    <Stack justifyContent="center" direction="row" spacing={3}>
                        <CardMedia
                            src={logo}
                            sx={{
                                height: 150,
                                objectPosition: "center",
                                objectFit: "contain"
                            }}
                            component="img"
                        />
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Typography
                        variant="h4"
                        sx={{
                            textTransform: "uppercase",
                            color: "colors.accent",
                            fontWeight: 700,
                            fontFamily: "RayleighGlamour",
                            letterSpacing: 1.4
                        }}>
                        Cyclet Delivery
                    </Typography>
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={3}>
                        <NavigationLink path="home" label="Home"/>
                        <NavigationLink path="about" label="About Us"/>
                        <NavigationLink path="pricing" label="Pricing"/>
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <MUILink href="tel://(+233)256545733" underline="none">
                                <WifiCalling3Outlined
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "25%",
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </MUILink>
                            <MUILink href="tel://(+233)256545733" underline="none">
                                <Button
                                    variant="text"
                                    size="large"
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "colors.accent",
                                        cursor: "pointer",
                                    }}>
                                    (+233) 256 545 733
                                </Button>
                            </MUILink>
                        </Stack>
                        <ScrollLink to="contact" smooth={true} spy={true} offset={50} duration={500} delay={100}>
                            <Button
                                fullWidth={true}
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                color="secondary"
                                sx={{
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderRadius: 2,
                                    borderWidth: 2,
                                    backgroundColor: "secondary.main",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova"
                                }}>
                                Contact Us
                            </Button>
                        </ScrollLink>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default DrawerContent;