import { createSlice } from "@reduxjs/toolkit";

const initialNavState = {
    home: true,
    about: false,
    work: false,
    contact: false,
  };

const navSlice = createSlice({
    name: 'nav',
    initialState: initialNavState,
    reducers: {
        linkHome(state) {
            state.home = true;
            state.about = false;
            state.work = false;
            state.contact = false;
        }, 
        linkAbout(state) {
            state.home = false;
            state.about = true;
            state.work = false;
            state.contact = false;
        }, 
        linkWork(state) {
            state.home = false;
            state.about = false;
            state.work = true;
            state.contact = false;
        }, 
        linkContact(state) {
            state.home = false;
            state.about = false;
            state.work = false;
            state.contact = true;
        },
    },
});

export const navActions = navSlice.actions;

export default navSlice.reducer;