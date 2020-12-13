import React from 'react';
import { useState, useEffect, useCallback } from 'react'

const Form = ({addItemToList}) => {
  const [itemValue, setitemValue] = useState('');

  const onClickButtonItem = () => {
    if(itemValue !== '') {
      addItemToList(itemValue);
      setitemValue('')
    }    
  }

  const onKeyEnter = useCallback(
    event => {
      console.log("CHEK RENDER IF FUNCTION " , itemValue)
      if(itemValue !== '' && event.key === 'Enter') {
        addItemToList(itemValue);
        setitemValue('')
      }  
    },
    [itemValue,addItemToList]
  );

  // console.log("CHEK RENDER " , itemValue)
  // const onKeyEnter  = event => {
  //   console.log("CHEK RENDER IF FUNCTION " , itemValue)
  //   if(itemValue !== '' && event.key === 'Enter') {
  //     addItemToList(itemValue);
  //     setitemValue('')
  //   }  
  // }

  useEffect(()=> {
      window.addEventListener('keydown', onKeyEnter)
    return () => {
      window.removeEventListener('keydown', onKeyEnter)
    }
  },[onKeyEnter])
  
  const changeValue = (e) => setitemValue(e.target.value)

  return(
    <>
      <input value={itemValue} onChange={changeValue}/>
      <button onClick={onClickButtonItem} >Add Item</button>
    </>
  )
}

export default React.memo(Form);








