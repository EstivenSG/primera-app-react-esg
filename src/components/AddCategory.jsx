import { useState } from "react"

//{setCategories}
export const AddCategory = ({onAddCategoryParam}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(inputValue.trim().length > 0){
            // setCategories( categories => [...categories,inputValue]);
            onAddCategoryParam(inputValue);
            setInputValue('');
        }
    }


    return (
        <form 
            onSubmit={ onSubmitForm }
            // onSubmit={(event)=>onSubmitForm(event)}
        >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={
                    // (event) => onChangeInput(event)
                    onChangeInput
                }
            />
        </form>
    )
}
