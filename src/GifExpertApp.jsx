import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategoryParam = (parametro) => {

        if(categories.includes(parametro)) return;
        
        setCategories([parametro,...categories]);

        /* const validarExistencia = categories.filter((categoria) => 
            categoria.trim() == parametro.trim()
        );        

        if(validarExistencia.length == 0){
            setCategories([...categories,parametro]);
        } */
    }

    return (
        <>
            <h1>CATEGORIAS</h1>

            <AddCategory 
                // setCategories={setCategories} 
                onAddCategoryParam={(value) => onAddCategoryParam(value)}
                // onAddCategoryParam={onAddCategoryParam}
            />


            {
                categories.map(category => (
                    <GifGrid
                        key={category} 
                        category={category}
                    />
                ))
            }

        </>
    )
}