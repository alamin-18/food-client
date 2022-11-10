import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Rumi cooking`;
    }, [title])
};

export default useTitle;