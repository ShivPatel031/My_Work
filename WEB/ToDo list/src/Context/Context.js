import { createContext,useContext } from "react";

export const TodoArray = createContext();

export const TodoarrayProvider = TodoArray.Provider;

export const useTodoArray = ()=>{
    return useContext(TodoArray);
}