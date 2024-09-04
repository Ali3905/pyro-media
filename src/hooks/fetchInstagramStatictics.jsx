import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchInstagramStatistics(initialData, url) {
    const [data, setData] = useState(initialData)

    const fetchData = async (url) => {
        try {
            const res = await axios({
                method: "get",
                url: "https://instagram-statistics-api.p.rapidapi.com/community",
                params: {
                    url
                },
                headers: {
                    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
                    "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST
                }
            })
            setData(res.data.data)
        } catch (error) {
            alert(error.response.data.message)
        }


    }

    useEffect(() => {
        if (url && url.startsWith("https://instagram")) {
            fetchData(url)
        }
    }, [url])

    return [data, setData]
}