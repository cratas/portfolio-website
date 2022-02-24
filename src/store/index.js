import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./nav";

const store = configureStore({ 
    reducer: { nav: navReducer }, 
});

export default store;
