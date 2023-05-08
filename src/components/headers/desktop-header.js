import {Box, Button, Grid, Link as MUILink, Stack, Toolbar, Typography} from "@mui/material";
import NavigationLink from "../shared/navigation-link";
import {DarkModeOutlined, LightModeOutlined, WifiCalling3Outlined} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {Link as ScrollLink} from "react-scroll";

const DesktopHeader = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: "colors.accent"
            }}>
            <Grid container={true} alignItems="center" justifyContent="space-around">
                <Grid item={true}>
                    <ScrollLink to="home" smooth={true} spy={true} offset={50} duration={500} delay={100}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "colors.accent",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4
                            }}>
                            Cyclet Delivery
                        </Typography>
                    </ScrollLink>
                </Grid>
                <Grid item={true}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <NavigationLink path="home" label="Home"/>
                        <NavigationLink path="about" label="About Us"/>
                        <NavigationLink path="pricing" label="Pricing"/>
                    </Stack>
                </Grid>

                <Grid item={true}>
                    <Stack direction="row" spacing={4} alignItems="center">
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
                                        }}
                                    />
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
                        <Stack direction="row" spacing={1} alignItems="center">
                            <MUILink href="tel://+380334268644" underline="none">
                                <WifiCalling3Outlined
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "25%",
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </MUILink>
                            <MUILink href="tel:// (+233) 256 545 733" underline="none">
                                <Button
                                    variant="text"
                                    size="large"
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "colors.accent",
                                        cursor: "pointer",
                                    }}>
                                    +233 025-654 5733
                                </Button>
                            </MUILink>
                        </Stack>
                        <ScrollLink to="contact" smooth={true} spy={true} offset={50} duration={500} delay={100}>
                            <Button
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
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader