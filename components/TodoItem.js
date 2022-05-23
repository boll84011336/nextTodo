
import styled from "styled-components";
import trash from '../img/trash.jpg';
import Skeleton from 'react-loading-skeleton';
import ReactLoading from 'react-loading';


const TodoBlock = styled.div`
  display:flex;
  align-item:center;
  justify-content:space-between;
  margin: 36px 20px;
  border: 1px solid black;
  padding:4px;
 `

const TodoContent = styled.div`
  padding:4px;
`

const TodoButtonWrapper = styled.div`
`

const Button = styled.button`
  color: black;
  &:hover {
    color: red;
  }
  & + & {
    margin-left: 4px;
  }
`

const RedButton = styled(Button)`
color:red;
`

export default function TodoItem({todo, handleDeleteTodo}) {
  console.log(trash)
  return ( 
    <TodoBlock>
       {/* TodoContent 這是一條todo item */}
        <TodoContent>{todo.content}</TodoContent>
        <TodoButtonWrapper>
          <RedButton className='delete' onClick={() => {handleDeleteTodo(todo.id)}}></RedButton>
        </TodoButtonWrapper>     
    </TodoBlock>
  );
}