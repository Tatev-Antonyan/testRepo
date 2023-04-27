function List({setList, list}) {

    const handleDeleteDone = (id) => {
        let arr = list.filter((i) => i.id !== id);
        setList(arr)
      };
      

    return(
        <>
            <h1>TodoList</h1>
            <button className='filter_btn'>All</button>
            <button className="filter_btn">Done</button>
            <button className="filter_btn">Todo</button>
            {list?.map((i) => (
                <div className="list_items" key={i.id}>
                    {i.name}
                    <div><input className="check" type="checkbox"/>
                    <button className='del_item' onClick={() => handleDeleteDone(i.id)}>x</button>
                    </div>
                </div>
            ))}
            
        </>
    )
}

export default List;