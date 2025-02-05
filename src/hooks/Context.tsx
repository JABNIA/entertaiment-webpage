import { createContext, useContext } from "react";
import { contextProps } from "../components/types";


export const EntertaimentContext = createContext<contextProps | undefined>(undefined)


export default function useEntertaimentContext() {
    const data = useContext(EntertaimentContext)
    if (data === undefined){
        throw new Error("data is undefined")
    }else {
        return data
    }
}