import React from 'react';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from './form'
import Loading from './loading'


const  Parent = () => {
    const [filterData, setfilterData] = useState('')
    const dispatch = useDispatch()
    const list = useSelector(state => state.getData.list.filter((item) => item.includes(filterData)))


    const addItemToList = (item) => {
        dispatch({type:'ADD_ITEM_FOR_WATCHER', payload:item})
    }
    
    const onDeletItem = (key) => {
        dispatch({type:'DELET_ITEM', payload:key})
    }
    
    return (
        <>
            <input placeholder='Search...' value={filterData} onChange={(e) => setfilterData(e.target.value)}/>
            {list ? list.map((item, key) => (
                <li key={key}>
                    <button onClick={() => onDeletItem(key)}>X</button>
                    {item}
                </li>
            )):<Loading/>}
            <Form addItemToList={addItemToList}/>
        </>
    );
}


export default Parent;
