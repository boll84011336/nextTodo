import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import Layout from '../components/Layout';
import React, { useState, useRef, useEffect } from 'react';
import ReactLoading from 'react-loading';

const TodoWrapper = styled.div`
  padding-top:60px;
  max-width: 800px;
  height: 600px;
  margin: 80px auto;
  font-size: 20px;
  background: #F8F8F8;
  border: 1px #C7C3C6 solid;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 100px auto;
    overflow: hidden;
  }
`;

const TodoTitle = styled.p`
  font-size:36px;
  margin: -20px 0px 0px 22px;
  font-weight: 600;
`

const InsertBlock = styled.div`
  position: absolute;
  bottom: 16px;
  left: 20px;
  right:20px;
  display:flex;
  justify-content:space-between;
`

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function Home() {
  // const [todos, setTodos] = useState([1])
  const [todos, setTodos] = useState([{id:1, content:'abc', complete: false}]);
  const [value, setValue] = useState('')
  const [done, setDone] = useState(undefined);
  const id = useRef(2)

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  // 模擬延遲函數 n 是延遲秒數
  const delay = (n) =>
    new Promise((resolve) => {
    setTimeout(resolve, n*1000)
  })

  //新增
  const handleButtonClick = () => {
    setDone(true);
    delay(2).then(() => {
      setTodos([...todos, {
        id:id.current,
        content:value,
        complete: false
      }])     
      id.current++
      setDone(false);
    })   
    setValue('')
  }

  //模擬API刪除
  const handleDeleteTodo = id => {
    delay(1).then(() => {
      setTodos(todos.filter(todo => todo.id !== id))
    })   
  }

  //編輯
  const handleCheckChange = id => {
    const newTodoList = todos.map(todo => {
      if(todo.id === id)
      return {...todo, complete:!todo.complete}
      return todo
    })
    setTodos(newTodoList)
  }

  return(
    <div>
      <Layout/>
      <TodoWrapper>
        <TodoTitle>Todo List</TodoTitle>
          {
             done ? <ReactLoading className='load' type={"spin"} color="#fff" height={50} width={50} />
             :            
            todos.map(todo => (
              <><TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCheckChange={handleCheckChange} /></>
            ))            
          }
        <InsertBlock>
          <input type="text" size="102" placeholder="todo" value={value} onChange={handleInputChange}/>
          <input type="button" className='add' onClick={handleButtonClick}></input>
          {/* <InsertButton>Add todo</InsertButton> */}
        </InsertBlock>
      </TodoWrapper>
    </div>
  )
}
