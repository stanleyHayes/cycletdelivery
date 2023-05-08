import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import {lazy, Suspense} from "react";
import Splash from "./components/shared/splash";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {THEMES} from "./utils/themes";
import {AnimatePresence} from "framer-motion";

const HomePage = lazy(() => import("./pages/home/home-page"));

// https://www.behance.net/gallery/165987065/Unona-Cleaning-Website-Design?tracking_source=search_projects%7Ccleaning+service
function App() {

    const {theme} = useSelector(selectUI);
    const location = useLocation();

    return (
        <ThemeProvider theme={theme === "light" ? THEMES.lightTheme : THEMES.darkTheme}>
            <CssBaseline enableColorScheme={true}>
                <AnimatePresence presenceAffectsLayout={true} mode="wait" initial={true}>
                    <Routes location={location}>
                        <Route path="/" element={<Suspense fallback={<Splash/>}><HomePage/></Suspense>}/>
                  </Routes>
                </AnimatePresence>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
