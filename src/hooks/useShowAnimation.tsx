import { useEffect, useState } from "react"

export const useShowAnimation = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100)
    }, [])

    return { isVisible }
}