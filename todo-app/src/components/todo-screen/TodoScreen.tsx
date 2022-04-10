import React, { FC, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import BasicCard from './BasicCard'
import BasicInputCard from './BasicInputCard';

type TodoObject = {
  text: string
  ScheduledTime: Date
};

const TodoScreen: FC = () => {

  const [todoList, setTodoList] = useState<TodoObject[]>([]);

  useEffect(() => {
    // alert(JSON.stringify(todoList));
  }, [todoList])

  return (
    <>
      <Box
        sx={{
          marginTop: '1em',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <BasicInputCard setTodoList={setTodoList} />           {/* Input card */}

        <Box
          sx={{
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: 'center'
          }}
        >
          {
            todoList.map(item => {
              return <BasicCard key={Math.random()} />
            })
          }
        </Box>
      </Box>
    </>
  )
}

export default TodoScreen