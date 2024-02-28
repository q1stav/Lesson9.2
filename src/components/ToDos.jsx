import React from 'react';
import { ToDo } from './ToDo';
import { useSelector } from 'react-redux';
import { selectPosts } from '../selectors';


export const ToDos=({onClickDelete,refreshToDoList})=>{
    const  toDos  = useSelector(selectPosts);
    return(
    <>
        {toDos.map(({ id, title }) => (
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