import React from 'react';
import { ToDo } from './ToDo';
import { useSelector } from 'react-redux';
import { selectPosts } from '../selectors';



export const ToSort=({onClickDelete,refreshToDoList})=>{
    const  toDos  = useSelector(selectPosts);
    const newArrForSort=Array.from(toDos);
    const sortetArr=newArrForSort.sort((x, y) => x.title.localeCompare(y.title))
    return(
    <>
        {sortetArr.map(({ id, title }) => (
            <ToDo
            id={id}
            title={title}
            onClickDelete={onClickDelete}
            rerefrestToDoList={refreshToDoList}
            key={id}
      />))}
    </>
      
    )
}