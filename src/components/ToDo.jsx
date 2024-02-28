import React, { useState } from 'react';
import styles from '../styles/ToDo.module.css'
import { useDispatch } from "react-redux";
import { changeToDo } from '../actions';

export const ToDo=({id,title,onClickDelete,refreshToDoList})=>{
const dispatch = useDispatch();
 const[isHidden, setIsHidden]=useState(false);
 const[updateToDoValue, setUpdateToDoValue]=useState(title)

    const onChange = ({ target }) => {
      setUpdateToDoValue(target.value);
    };

    const onClickUpdate = () => {
      setIsHidden(!isHidden);
    };

    const confirmUpdate=()=>{
      dispatch(changeToDo( id,updateToDoValue));
      setIsHidden(!isHidden);
    }

    return(
    <div className={styles.todo}>
        {isHidden ? <><input
          className={styles.input}
          type="text"
          name="inputUpdateToDo"
          defaultValue={updateToDoValue}
          onChange={onChange}
        />
        <div className={styles.buttonCcontainer}> 
          <button
          className={styles.button}
          type="sumbit"
          onClick={()=>{confirmUpdate(id)}}
        >
          Сохранить
        </button>
        <button
          className={styles.button}
          type="sumbit"
          onClick={()=>{onClickUpdate()}}
        >
          Отмена
        </button>
        </div>
        
        </>
        :<>{title} 
        <div className={styles.buttonCcontainer}>       
        <button
          className={styles.button}
          type="sumbit"
          onClick={()=>{onClickUpdate()}}
        >
          Изменить
        </button>
        <button
          className={styles.button}
          type="sumbit"
          onClick={()=>{onClickDelete(id)}}
        >
          Удалить
        </button>
        </div>
        </>}
        </div>
        )
}