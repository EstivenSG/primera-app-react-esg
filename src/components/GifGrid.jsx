import { useFetchGifs } from "../hook/useFetchGifs";
import { Gifs } from "./Gifs";

export const GifGrid = ({ category }) => {

    const {listGifs,isLoading} = useFetchGifs(category);

    return (
        <>
            {isLoading && (<h2>Cargando...</h2>)}
            <h2>{category}</h2>
            <div className="card-grid">
            {
                listGifs.map( (gif) => (
                    <Gifs 
                        key={gif.id} 
                        gif={gif} 
                        /* //esparcir todas las propiedas del item, en props
                        { ...gif } */
                    />
                ))
            }
            </div>
        </>
    )
}
