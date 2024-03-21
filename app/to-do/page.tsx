'use client'
import { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

const todos = [
  {
    id: 1,
    task: "Finish coding assignment",
    completed: false,
  },
  {
    id: 2,
    task: "Buy groceries",
    completed: true,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 3,
    task: "Schedule dentist appointment",
    completed: false,
  },
];

export default function Home() {
  const [todoList, setTodoList] = useState(todos);

  const toggleTodo = (id:any) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
      <div className="w-full max-w-[800px]">
        <h2 className="text-xl font-semibold mb-4">To Do List</h2>
        {todoList.map(todo => (
          <div key={todo.id} className="flex items-center justify-between py-2 border-b border-gray-300">
            <p className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.task}</p>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 form-checkbox text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
        ))}
      </div>
  );
}
