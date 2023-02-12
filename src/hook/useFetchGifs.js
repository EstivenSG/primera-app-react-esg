//custom hook
import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif"

export const useFetchGifs = (category) => {
    
    const [listGifs, setListGifs] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() => {
        setListGifs(await getGif(category));
        setisLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        listGifs,
        isLoading
    }
}
