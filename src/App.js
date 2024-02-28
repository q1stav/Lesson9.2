import { useState } from "react";
import styles from "./App.module.css";
import { useEffect } from "react";
import { ToDos } from "./components/ToDos";
import { ToSort } from "./components/ToSort";
import { ToFind } from "./components/ToFind";
import { useDispatch } from "react-redux";
import { getAllToDos, addNewToDo, deleteToDo } from "./actions";

export const App = () => {
  const [toDos, setToDos] = useState([]);
  const [addToDo, setAddToDo] = useState("");
  const [refreshToDoListFlag, setRefreshToDoListFlag] = useState(false);
  const [isSorted, setIsSorted] = useState(false); //Флаг
  const [toFind, setToFind] = useState([]);
  const [findToDo, setFindToDo] = useState([]);
  const [isFind, setIsFind] = useState(false); //Флаг
  const dispatch = useDispatch();

  const refreshToDoList = () => {
    setRefreshToDoListFlag(!refreshToDoListFlag);
  };
  const refreshIsSorted = () => {
    // Изменить состояния флага для сортировки
    setIsSorted(!isSorted);
  };

  const refreshIsFind = () => {
    // Изменить состояния флага для поиска
    setIsFind(!isFind);
  };

  useEffect(() => {
    fetch("http://localhost:3005/posts")
      .then((response) => response.json())
      .then((loadedToDos) => {
        setToDos(loadedToDos);
           dispatch(getAllToDos(loadedToDos)); // DISPATCH
      });
  }, [dispatch]);

  const onRequestAddNewToDo = () => {
    dispatch(addNewToDo(addToDo));
    setAddToDo("");
    refreshToDoList();
  };

  const onClickDelete = (id) => {
    dispatch(deleteToDo(id));
     refreshToDoList();
  };

  const onChange = ({ target }) => {
    setAddToDo(target.value);
  };

  const onChangeFind = ({ target }) => {
    setFindToDo(target.value);
  };

  const find = () => {
    refreshIsFind();
    const newFindArr = [];
    toDos.forEach((item) => {
      if (item.title.toLowerCase().includes(findToDo.toLowerCase())) {
        newFindArr.push(item);
      }
    });
    setToFind(newFindArr);
    setFindToDo("");
    refreshToDoList();
  };

  return (
    <div className={styles.containerToDos}>
      <h1>TODO LIST</h1>
      <div className={styles.inputField}>
        <input
          className={styles.input}
          type="text"
          name="inputAddToDo"
          value={addToDo}
          onChange={onChange}
        />
        <button
          className={styles.button}
          onClick={onRequestAddNewToDo}
          type="submit"
        >
          Добавить
        </button>
      </div>
      <button
        hidden={!isFind}
        className={styles.cancelButton}
        onClick={() => {
          find();
        }}
        type="submit"
      >
        Отменить поиск
      </button>
      {!isSorted && !isFind && (
        <ToDos
          onClickDelete={onClickDelete}
          refreshToDoList={refreshToDoList}
        />
      )}
      {isSorted && !isFind && (
        <ToSort
          onClickDelete={onClickDelete}
          refreshToDoList={refreshToDoList}
        />
      )}
      {isFind && (
        <ToFind
          toFind={toFind}
          onClickDelete={onClickDelete}
          refreshToDoList={refreshToDoList}
        />
      )}
      <button
        hidden={isFind}
        className={isSorted ? styles.sortButtonClicked : styles.sortButton}
        onClick={refreshIsSorted}
        type="submit"
      >
        Сортировать по алфавиту
      </button>
      <input
        hidden={isFind}
        className={styles.input}
        type="text"
        name="inputAddToDo"
        value={findToDo}
        onChange={onChangeFind}
      />
      <button
        hidden={isFind}
        className={styles.findButton}
        onClick={() => {
          find();
        }}
        type="submit"
      >
        Поиск
      </button>
    </div>
  );
};

export default App;
