import {createSlice} from "@reduxjs/toolkit";
import {UNONA_CONSTANTS} from "../../../utils/constants";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: localStorage.getItem(UNONA_CONSTANTS.UNONA_THEME_VARIANT_KEY) ?
            localStorage.getItem(UNONA_CONSTANTS.UNONA_THEME_VARIANT_KEY) :
            "light",
        drawerOpen: false
    },
    reducers: {
        toggleDrawer: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleTheme: (state) => {
            localStorage.setItem(UNONA_CONSTANTS.UNONA_THEME_VARIANT_KEY, state.theme === "light" ? "dark" : "light")
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

const {reducer, actions} = uiSlice;
export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {
    toggleDrawer: actions.toggleDrawer,
    toggleTheme: actions.toggleTheme,
};

export default reducer;