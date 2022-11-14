import { createReducer } from "@reduxjs/toolkit";
import setFilter from "./actionsFilter";

export const filterReducer = createReducer("", {
    [setFilter]: (_, {payload}) =>  payload,
});