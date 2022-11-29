import { useEffect } from "react"

export const useTitle = (title) => {
    useEffect(()=> {
        document.title = `${title} - ROZA'S FLAVOR FUSION`;
    },[title])

}