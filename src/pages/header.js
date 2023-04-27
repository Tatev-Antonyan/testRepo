import CustomButton from "../components/customButton";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useRef } from "react";


function Header({setList, list}) {

    const [item, setItem] = useState()

    const changeItem = (e) => {
        setItem(e.target.value)
    }

    const handleAddNew = () => {
        setList([...list, {id: 5, name: item}])
    }

    const textInput = useRef(null)

    const btnOnClick = () => {
        textInput.current.focus()
    };



    return(
        <React.Fragment>
            <h1>ToDoInput</h1>
            <div className='input_box'>
                <input type="text" ref={textInput} onChange={changeItem} value={item}/>
                <button onClick={handleAddNew}>Add New</button>
                <button onClick={btnOnClick}>Focus</button>
                {/* <CustomButton btn='Add New Task' onClick={handleAddNew}/> */}
            </div>
        </React.Fragment>
    )
}

export default Header;

Header.propTypes = {
    item: PropTypes.string
};