import {useEffect} from 'react';
import {useState} from 'react';
import Header from './header';
import List from './list';
import React from 'react';

let toDoList = [
    {id: 1, name: 'Create project'},
    {id: 2, name: 'Install npm packages'},
    {id: 3, name: 'Create folders'},
    {id: 4, name: 'Start doing hw'}
]

function Home () {
    
    const [list, setList] = useState()

    useEffect(() => {
        setList(toDoList);
    }, [])
    
    const handleClick = () => {
        setList([])
    }

    const handleBack = () => {
        setList(toDoList)
    }

    console.log(list)

    return (
        <>
            <Header setList={setList} list={list}/>
            <List setList={setList} list={list}/>
            <button className='delete_btn'>Delete done tasks</button>
            <button onClick={handleClick} className='delete_btn'>Delete all tasks</button>
            <button onClick={handleBack} className='back_btn'>Back</button>
        </>
    )
}

export default Home;


const Memo = React.memo((props) => {
    return(
        <div>
            {props?.list?.Map((i) => (
                <div className='list_items' key={i.id}>
                    {i.name}
                </div>
            ))}
        </div>
    )
});